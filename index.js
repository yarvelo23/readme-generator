// incorporating the inquirer node module
const inquirer = require("inquirer");
// incorporating the file system node module
const fs = require('fs');
// incorporating axios
const axios = require("axios");
// requiring generate markdown file
const generate = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
