const { writeFileSync, readFileSync } = require("fs");

const firstFile = readFileSync("../content/first-file.txt", "utf-8");
const secondFile = readFileSync("../content/second-file.txt", "utf-8");

console.log(firstFile, secondFile);

writeFileSync(
  "../content/result-sync.txt",
  `here is the result: ${firstFile}\n${secondFile}`,
  { flag: "a" }
);
