// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[${license} License](LICENSE)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License 📝

This application is covered under the ${license} license.

For more details, please refer to the ${renderLicenseLink(license)}.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseSection = renderLicenseSection(answers.license);
  
  const languageBadges = answers.languages.map(language => `![${language}](https://img.shields.io/badge/-${encodeURIComponent(language)}-orange)`).join(' ');

  const readmeContent = `
# ${answers.titleEmoji} ${answers.title}

${licenseBadge}
    
## Description 📝
${answers.description}


## Table of Contents
- [Usage](#usage-)
- [Credits](#credits-)
- [Installation](#installation-)
- [Language Badges](#language-badges-)
- [License](#license-)
- [Tests](#tests-)
- [Questions & How to Contribute](#questions--how-to-contribute-)

## Usage 🚀
${answers.usage}

## Credits 👏
${answers.credits}

## Installation 🛠️
${answers.installation}

## Language Badges 💻
${languageBadges}

${licenseSection}

## Tests ✅
${answers.tests}

## How to Contribute 🤝
${answers.contribute}

## Questions
For any additional questions, please contact me:

GitHub: [${answers.github}](https://github.com/${answers.github})

Email: [${answers.email}](mailto:${answers.email})
`;
  return readmeContent;
  }

module.exports = generateMarkdown;
