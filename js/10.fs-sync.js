const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("../content/first-file.txt", "utf8");
const second = readFileSync("../content/second-file.txt", "utf8");

console.log(first, second);

writeFileSync(
  "../content/result-sync.txt",
  `this is the result of two files:\n${first}\n${second}`,
  { flag: "a" }
);
