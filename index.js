// packages needed for this application
const markdown = require("./createmarkdown");
const fs = require("fs");
const inquirer = require("inquirer");



// An array of questions for user input
const questions = [

    {
        type: "input",
        message: "Describe title of the project",
        name:"title"
    },
    
    
    {
        type: "input",
        message: "Please enter brief description about this project",
        name:"description"
    },
    {
        type: "input",
        message: "",
        name:"install"
    },
    {
        type: "input",
        message: "",
        name:"usage-info"
    },
    {
        type: "input",
        message: "",
        name:"contribution"
    },
    {
        type: "input",
        message: "",
        name:"tests"
    },
    {
        type: "input",
        message: "",
        name:""
    },
    {
        type: "input",
        message: "",
        name:""
    },
    {
        type: "input",
        message: "Please enter your GitHub Username",
        name:"username"
    },
    {
        type: "input",
        message:  "Please enter your email id",
        name:"email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
