import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


let counter = 0;

const makeCommits = (n) => {
  if (n === 0) return;
  counter++;
  console.log(`Commit #${counter}`);
  
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const date = moment()
    .subtract(getRndInteger(1,4), "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();
  const data = { date: date };
  console.log(date);
  
  jsonfile.writeFile(path, data, () => {
    simpleGit()
      .pull("origin", "main")
      .then(() => {
        simpleGit()
          .add([path])
          .commit(date, { "--date": date })
          .push("origin", "main", { "--force": true }, (err) => {
            if (err) {
              console.error("Push error:", err);
            } else {
              console.log("Push successful!");
            }
            makeCommits.bind(this, --n)();
          });
      })
      .catch((err) => {
        console.error("Pull error:", err);
      });
  });
};

makeCommits(13271);