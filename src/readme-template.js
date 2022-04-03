module.exports = (templateData) => {
  // console.log(templateData);

  return `
  ${templateData.badge}

# **${templateData.title}**


## **Description**
- ${templateData.description}

## **Table of Contents**
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)


## **Installation**
- ${templateData.installation}


## **Usage**
- ${templateData.usage}  


## **License**
- ${templateData.license}


## **Contributing**
How to Contrubute
- ${templateData.contributing}


## **Testing**
- ${templateData.test}


## **Questions**
- www.github.com/${templateData.github}
- ${templateData.email}
`;
};
