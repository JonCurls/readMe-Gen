// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./src/readme-template.js");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
fs.writeFile("./README.md", generateReadme(), (err) => {
  err ? console.log(err) : console.log("README successfully created!");
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
