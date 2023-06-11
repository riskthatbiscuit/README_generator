// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'list',
        name: 'titleEmoji',
        message: 'Choose an emoji for the project:',
        choices: ['🌟', '🚀', '🎉', '🔥', '💡', '⭐️'],
     },    
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Right a brief description of your project, including motivation for creation, what problem it solves, what you learnt and why it stands out',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the process to install your application',
    },
    {
        type: 'input',
        name: 'usage',
        message:'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Write who you oule like to credit',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are there for your application',
    },
    {
        type: 'list',
        message: 'Choose a license for your application:',
        name: 'license',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'ISC', 'Unlicense'],
    },
    {
        type: 'checkbox',
        message: 'What technologies have been used?',
        name: 'languages',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
        type: 'list',
        message: 'How do you people contribute to this project',
        name: 'contribute',
        choices: ['email', 'phone', 'telekinesis'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README file generated successfully.")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const readmeContent = generateMarkdown(answers)
        writeToFile("README.md",readmeContent);
    })
}

// Function call to initialize app
init();
