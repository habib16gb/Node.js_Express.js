const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subFolder", "text.txt");
console.log(filePath);

const parseFile = path.parse(filePath);
console.log(parseFile);
const baseName = path.basename(filePath);
console.log(baseName);
const absolute = path.resolve(__dirname, "content", "subFolder", "text.txt");
console.log(absolute);
