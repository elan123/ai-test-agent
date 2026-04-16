const fs = require("fs");
const { execSync } = require("child_process");

const code = fs.readFileSync("./src/ClaimService.java", "utf-8");
let prompt = fs.readFileSync("./prompts/junit_prompt.txt", "utf-8");

prompt = prompt.replace("{{CODE}}", code);

console.log("⚡ Generating test cases...");

const response = execSync(`ollama run deepseek-coder "${prompt}"`, {
  maxBuffer: 1024 * 1024 * 10
}).toString();

fs.writeFileSync("./test/ClaimServiceTest.java", response);

console.log("✅ Test file generated!");