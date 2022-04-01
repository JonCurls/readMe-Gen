module.exports = (templateData) => {
  console.log(templateData);

  return `
# ${templateData.title}

## ${templateData.description}
- motivation
- what problem does this solve
- what did you learn

## Table of Contents
- [Installation](#installation)
- Usage
- License
- Contributing
- Tests
- Questions

## Installation
- What are the steps required

## Usage
- Instructions and examples for use  

## How to Contribute

## Test Instructions

## Credits
- ${templateData.credits}

## License

## Badges

## Questions
- Github
- Email

`;
};

// module.exports = generateReadme;
