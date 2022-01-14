const inquirer = require("inquirer");
const fs = require("fs");
const path =require("path");
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern"); 
const Manager = require("./lib/Manager"); 
const teamArray = [];
// const output_dir = path.resolve(__dirname, "ouput");
// const outputPath = path.join(output_dir, "team.html");
// const render = require("./src/template.js");


function addManager() {
    inquirer 
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the managers name"
        },

        {
            type: "input",
            name: "id",
            message: "What is the managers id?"
        },

        {
            type: "input",
            name: "email",
            message: "What is the managers email?"
        },

        {
            type: "input",
            name: "officeNumber",
            message: "What is the managers office number?"
        },
    ])
    .then((answers) => {console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    teamArray.push(manager);
    console.log(teamArray);
    buildTeam();
    }) 
};

function buildTeam() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "teammate",
            message: "would you like to add an engineer, intern, or finish building your team?",
            choices: ["engineer", "intern", "finish",]
        }
        ])
        .then(answer => {
            let userChoice = answer.teammate;
            if (userChoice === "manager") {
                addManager();
            } else if (userChoice === "engineer") {
                addEngineer();
            } else if (userChoice === "intern") {
                addIntern();
            } else 
            console.log("You have Successfully built your team!");
        });
}


function addIntern() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name"
        },

        {
            type: "input",
            name: "id",
            message: "What is the intern's id?"
        },

        {
            type: "input",
            name: "email",
            message: "What is the interns email?"
        },

        {
            type: "input",
            name: "school",
            message: "What school did the intern go to?"
        },
    ])
    .then((answers) => {console.log(answers);
    const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
    teamArray.push(intern);
    console.log(teamArray);
    buildTeam();  
    }) 
};

function addEngineer() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name"
        },

        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?"
        },

        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },

        {
            type: "input",
            name: "school",
            message: "What is the engineer's github?"
        },
    ])
    .then((answers) => {console.log(answers);
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
    teamArray.push(engineer);
    console.log(teamArray);
    buildTeam();   
    }) 
};



// // dynamically creates the html
// function renderTeam() {

// }

addManager()



