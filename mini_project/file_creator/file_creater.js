import readline from "readline";
import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fileCreation = () => {
  rl.question("Enter your filename : ", (filename) => {
    rl.question("Enter your content : ", (content) => {
      fs.writeFile(filename, content, (err) => {
        if (err) console.log(err);
        else console.log("File created successfully");
        rl.close();
      })
    })
  });
}

fileCreation();