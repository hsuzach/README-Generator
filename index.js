const inquirer = require('inquirer');
const fs = require('fs')


// array of questions for user
inquirer.prompt([
  {
    name: 'title',
    type: 'input',
    message: 'Please provide the title of your ReadMe.',
  },
  {
    name: 'description',
    type: 'input',
    message: 'Please provide the description of your ReadMe.',
  },
  {
    name: 'license',
    type: 'list',
    message: "Please select your project's license type."
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Please provide command instructions to install.'
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Please provide usage instructions.'
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'Please provide instructions to contribute.'
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Please provide command instructions to test.'
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

  fs.writeFile(filename, (

  
  
  
    ),(err)=>
      err ? console.log(err) : console.log('Success!')
  ); 
})



