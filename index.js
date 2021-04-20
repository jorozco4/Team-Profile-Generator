const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("Inquier");
const Manager = require("Manager");
const Intern = require("intern");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your Managers Name?",
    },
    {
      type: "input",
      message: "What is your Managers ID",
      name: "ID",
    },
    {
      type: "input",
      message: "What is your Managers email",
      name: "email",
    },
    {
      type: "input",
      message: "What is your Managers role",
      choices: ["Engineer", "Intern", "Manager"],
      name: "role",
    },

    {
      type: "input",
      message: "What is your Github",
      name: "Github",
    },
    {
      type: "input",
      message: "What is your School Name",
      name: "School Name",
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
