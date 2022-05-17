// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What are you going to name your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Can you describe your project?'
    },
    {
        type: 'input',
        name: 'solution',
        message: 'What problem does this project solve?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license used for this project: (Required)',
        choices: ['apache', 'mit', 'gnu']
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Hell yeah, you just created a new README file!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data));
        });

};

// Function call to initialize app
init();
