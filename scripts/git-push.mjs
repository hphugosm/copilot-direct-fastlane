import { execSync } from "node:child_process";

const commitMessage = process.argv.slice(2).join(" ").trim() || "chore: update mvp";

const run = (command, allowFail = false) => {
  try {
    return execSync(command, { stdio: ["pipe", "pipe", "pipe"] }).toString().trim();
  } catch (error) {
    if (allowFail) {
      return "";
    }
    process.stderr.write(error.stderr?.toString() || error.message);
    process.exit(1);
  }
};

run("git rev-parse --is-inside-work-tree");
run("git add -A");

const hasChanges = run("git status --porcelain", true);
if (hasChanges) {
  run(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`);
}

const branch = run("git rev-parse --abbrev-ref HEAD");
run(`git push origin ${branch}`);

console.log(`GIT_PUSH_OK on branch ${branch}`);
