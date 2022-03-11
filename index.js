const inquirer = require('inquirer');
const fs = require('fs');


//questions for user
inquirer.prompt([
  {
    name: 'title',
    type: 'input',
    message: 'Please provide the project title of your ReadMe.',
  },
  {
    name: 'description',
    type: 'input',
    message: 'Please provide the project description.',
  },
  {
    name: 'license',
    type: 'list',
    message: "Please select your project's license type.",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Please provide instructions to install.'
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Please provide instrcutions to use.'
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'Please provide instructions to contribute.'
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Please provide instructions to test.'
  },
  {
    name: 'github',
    type: 'input',
    message: 'Please enter your GitHub username.',
  },
  {
    name: 'email',
    type: 'input',
    message: 'Please enter your email address.',
  }

])
.then(data =>{
  console.log(data)
  const filename = `${data.title}README.md`;

//template for README
  const generatedREADME = 
`
# ${data.title}


<img src='https://img.shields.io/badge/License-${data.license}-blue.svg'>

##Description

${data.description}

##Table of Contents

<details open="open">
<summary>README Contents</summary>
<ul>
  <li><a href="#Usage">Usage</a></li>
  <li><a href="#Installation">Installation</a></li>
  <li><a href="#Tests">Tests</a></li>
  <li><a href="#Contributing">Contributing</a></li>
  <li><a href="#ContactInfo">Contact</a></li>

</ul>
</details>

<h3 id="Usage">Usage</h3>
${data.usage}

<h3 id="Installation">Installation</h3>



${data.installation}

<h3 id="Tests">Tests</h3>


${data.tests}

<h3 id="Contributing">Contributing</h3>
${data.contributing}

<h3 id="ContactInfo">Contact</h3>

If you have any questions, please reach out to me on GitHub at github.com/${data.github} or reach me by my email (${data.email}).

`
  fs.writeFile(`${data.title.toLowerCase().split(' ').join(' ')}README.md`, generatedREADME, (err)=>
    err ? console.log(err) : console.log('Successfully Generated README'))
})



