// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**

  ${data.badge}

  ## Description

  ${data.description}

  ## Table of contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub)

  ## Installation
  
    ${data.installation}

  ## Usage

    ${data.usage}

  ## License

    ${data.license}
  
  ## Contributors

    ${data.contributing}
  
  ## Test
  
    ${data.test}
  
  ## Repository

  - [Project Repo](${data.repo})

  ## GitHub

  ![Image of me](${githubInfo.githubImage})
    - ${githubInfo.name}
    - [GitHub Profile](${githubInfo.profile})
    - <${githubInfo.email}>

`;
}

module.exports = generateMarkdown;
