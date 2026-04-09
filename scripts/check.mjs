import { execSync } from "node:child_process";

try {
  execSync("npm run build", { stdio: "inherit" });
  console.log("CHECK_OK");
} catch (error) {
  console.error("CHECK_FAILED");
  process.exit(1);
}
