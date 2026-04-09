import { execSync } from "node:child_process";
import { basename } from "node:path";
import { config } from "dotenv";

config();

const run = (command) => execSync(command, { stdio: "inherit" });

const token = process.env.GITHUB_TOKEN;
const owner = process.env.GITHUB_OWNER || process.env.VIBECODER_GITHUB_OWNER;
const repo = process.env.GITHUB_REPO || basename(process.cwd());

if (!token || !owner) {
  console.error("Missing GITHUB_TOKEN or GITHUB_OWNER");
  process.exit(1);
}

run("npm run build");
run('npm run git:push -- "deploy: publish pages"');

const requestOptions = {
  method: "PUT",
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  },
  body: JSON.stringify({ build_type: "workflow" })
};

let response = await fetch(`https://api.github.com/repos/${owner}/${repo}/pages`, requestOptions);

if (!response.ok) {
  response = await fetch(`https://api.github.com/repos/${owner}/${repo}/pages`, {
    ...requestOptions,
    method: "POST"
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("GitHub Pages API failed:", details);
    process.exit(1);
  }
}

const pageInfoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/pages`, {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  }
});
const pageInfo = await pageInfoResponse.json();
console.log(`PUBLISH_OK ${pageInfo.html_url || `https://${owner}.github.io/${repo}/`}`);
