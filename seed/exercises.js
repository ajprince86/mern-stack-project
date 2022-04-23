const db = require("../db");
const Exercise = require("../models/exercise");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const exercises = [
    {
      name: "Tony Stark",
      description: "push ups",
      duration: 10,
      date: "04-12-2022",
    },
  ];
  await Exercise.insertMany(exercises);
  console.log("Exercises Added created");
};

const run = async () => {
  await main();
  db.close();
};

run();
