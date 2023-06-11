// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What do you want to call your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Right a brief description of your project, including motivation for creation, what problem it solves, what you learnt and why it stands out',
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
    err ? console.error(err) : console.log("README file generated successfully.")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const readmeContent = generateREADME(answers)
        writeToFile("README.md",readmeContent);
    })
}

function generateREADME(answers){
    const readmeContent = `
# ${answers.title}
    
## Description
${answers.description}

## Usage
${answers.usage}

## Credits
${answers.credits}

## Installation
${answers.installation}

## Badges
${answers.badges}

## How to Contribute
${answers.contribute}

## Tests
${answers.tests}
`
return readmeContent;
}

// Function call to initialize app
init();
