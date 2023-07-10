const { readFile, writeFile } = require("fs");

const first = readFile("../content/first-file.txt", "utf8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = result;
  readFile("../content/second-file.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = data;
    writeFile(
      "../content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      { flag: "a" },
      (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      }
    );
  });
});
