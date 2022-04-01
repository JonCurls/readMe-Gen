// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./src/readme-template.js");
// TODO: Create an array of questions for user input

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Would you kindly provide the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Would you kindly provide a short description of your project.",
    },
    {
      type: "input",
      name: "credits",
      message:
        "Would you kindly provide the creators and collaborators of this project",
    },
  ]);
};

questions().then((readmeData) => {
  const pageReadme = generateReadme(readmeData);
  fs.writeFile("./README.md", pageReadme, (err) => {
    err ? console.log(err) : console.log("README successfully created!");
  });
});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// fs.writeFile("./README.md", generateReadme(), (err) => {
//   err ? console.log(err) : console.log("README successfully created!");
// });

// TODO: Create a function to initialize app
// questions();

// Function call to initialize app
// init();
