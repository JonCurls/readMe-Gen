const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./src/readme-template.js");

// README questions
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
      name: "contributing",
      message: "Would you kindly provide the contribution guidelines.",
    },
    {
      type: "input",
      name: "installation",
      message:
        "Would you kindly provide the steps required to install your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Would you kindly provide instructions for use.",
    },
    {
      type: "input",
      name: "email",
      message: "Would you kindly provide your email to contact for questions.",
    },
    {
      type: "input",
      name: "github",
      message:
        "Would you kindly provide your GitHub username to contact for questions.",
    },
    {
      type: "input",
      name: "test",
      message:
        "Would you kindly provide information to preform tests for your application.",
    },
    {
      type: "list",
      name: "license",
      message: "Would you kindly choose a license",
      choices: [
        "Unlicense",
        "MIT",
        "Mozilla Public License 2.0",
        "Apache 2.0",
        "GNU GPL v3",
        "IBM Public License Version 1.0",
        "ISC",
        "Perl",
      ],
    },
  ]);
};

// calls the questions
questions().then((readmeData) => {
  // passes to get license badge
  licenseData(readmeData);
  const pageReadme = generateReadme(readmeData);
  //prints readme.md
  fs.writeFile("./README.md", pageReadme, (err) => {
    err ? console.log(err) : console.log("README successfully created!");
  });
});

// switch to return matching badge to license
const licenseData = (readmeData) => {
  switch (readmeData.license) {
    case "Unlicense":
      readmeData.badge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case "MIT":
      readmeData.badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      readmeData.badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Apache 2.0":
      readmeData.badge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU GPL v3":
      readmeData.badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "IBM Public License Version 1.0":
      readmeData.badge =
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "ISC":
      readmeData.badge =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "Perl":
      readmeData.badge =
        "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
  }
};
