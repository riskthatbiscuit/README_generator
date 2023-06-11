// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

// At a bare minimum, a README needs a title and a short description explaining the what, why, and how of the project.
// Use the following questions as a guide:
// What was your motivation?
// Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// What problem does it solve?
// What did you learn?
// What makes your project stand out?

// # <Your-Project-Title>
// ## Description
// ## Table of Contents (Optional)
// ## Installation
// ## Usage
// ## Credits
// ## License
// ## Badges
// ## Features
// ## How to Contribute
// ## Tests

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What do you want to call your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Right a brief description of your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Write who you oule like to credit',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the process to install your application',
    },
    {
        type: 'checkbox',
        message: 'What badges should be added?',
        name: 'badges',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
        type: 'list',
        message: 'How do you people contribute to this project',
        name: 'contribute',
        choices: ['email', 'phone', 'telekinesis'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are there for your application',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Successful")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log("Success2!");
        writeToFile("fileName",JSON.stringify(answers, null, '\t'));
    })
}

// Function call to initialize app
init();
