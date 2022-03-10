const inquirer = require('inquirer');
const fs = require('fs')


// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please provide the title of your ReadMe.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide the description of your ReadMe.',
  },
  {
    type: 'list',
    name: 'license',
    message: "Please select your project's license type."
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
  }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
