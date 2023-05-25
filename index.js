// Declaring requirements/imports
const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes');

// Prompts for user input
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo. It must not exceed three characters:'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: "Enter a color for the logo's shape:"
        }
    ])
    .then((data) => {
        const shape = new Shape(data);
        const svgContent = shape.generateSVG();
        console.log(svgContent);

        // To write the SVG itself that will be placed into the examples folder
        fs.writeFile('./examples/logo.svg', svgContent, (err) => 
            err ? console.log(err) : console.log('Generated logo.svg')
        );
    });
}

// Calling prompts
init();