function createMarkDown(data) {

    return `# ${data.title}

## Description
${data.description}

## Table of Contents
1. [Installation](#install)
2. [Usage](#usage)
4. [Contributing](#Contributing)
5. [Tests](#tests)
6. [License](#copyright)
6. [Developer](#developer)

## Install
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Developer
Developed by ${data.fnamelname}, please contact for any queries at [${data.email}](mailto:${data.email}). For more details, refer this repo link : [${data.username}](https://www.github.com/${data.username})

## Copyright
![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)`;


}
module.exports = createMarkDown;