// packages needed for this application
const markdown = require("./createmarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
const createMarkDown = require("./createmarkdown");



// An array of questions for user input
const questions = [

    {
        type: "input",
        message: "Describe title of the project",
        name: "title"
    },


    {
        type: "input",
        message: "Please enter brief description about this project",
        name: "description"
    },
    {
        type: "input",
        message: "Describe install instruction for this project",
        name: "install"
    },
    {
        type: "input",
        message: "Describe usage of this repository",
        name: "usage-info"
    },
    {
        type: "input",
        message: "Contribution to this project",
        name: "contribution"
    },
    {
        type: "input",
        message: "Instruction to run the tests",
        name: "tests"
    },
    {
        type: "list",
        message: "License of this project belongs to",
        name: "license",
        choices: ["None", "Apache", "MIT License"]
    },

    {
        type: "input",
        message: "Please enter your GitHub Username",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your email id",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdownResponse = createMarkDown(data);
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err)

        }
        console.log("generated READNE file succesfully");

    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (content) {
        writeToFile("README.md", content);
    });
}

// Function call to initialize app
init();
