function createMarkDown(data){

    let response = 
    `

    ## Title
    ${data.title}

    ## Description
    ${data.description};

    ## Table of Contents
    1. [Installation](#install)
    2. [Usage](#usage-info)
    4. [Contributing](#contribution)
    5. [Tests](#tests)
    6. [License](#license)
    6. [Developer](#developer)

    ## Install Instructions
    ${data.install}

    ## Usage
    ${data.usage-info}

    ## Contributing
    ${data.contribution}

    ## Tests
    ${data.tests}

    ## Developer
    Developed by ${data.fname-lname}, please contact for any queries at [${data.email}](mailto:${data.email}). For more details, refer this repo link : [${data.username}](https://www.github.com/${data.username})

    ## Copyright
    ![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)
    `;

    return response;
}
module.exports = createMarkDown;