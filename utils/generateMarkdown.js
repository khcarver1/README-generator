function generateMarkdown(data) {
  return `
# project title 
${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.solution}

## Tests
${data.Tests}

## Questions
${data.Questions}

${"https://github.com/" + data.GHuser}

${"I can be reached via email at " + data.emailaddy}

## Contributing
${data.credit}

## License
${data.license}

`;
}

module.exports = generateMarkdown;
