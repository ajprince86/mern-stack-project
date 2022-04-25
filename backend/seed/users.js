const db = require("../db");
const User = require("../models/user");
//24 minutes into video

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const users = [
    {
      name: "Tony Stark",
      current_height: "6'4",
      current_weight: "230",
    },
    {
      name: "Stever Rogers",
      current_height: "6'5",
      current_weight: "245",
    },
    {
      name: "Peter Parker",
      current_height: "6'3",
      current_weight: "240",
    },
  ];
  await User.insertMany(users);
  console.log("Users Created!!");
};

const run = async () => {
  await main();
  db.close();
};

run();
