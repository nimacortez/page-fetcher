const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log("Error: ", error)
  }
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}.`);
    }
  })
});