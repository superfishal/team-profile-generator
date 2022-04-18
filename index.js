const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const pageTemplate = require("./src/page-template.js");
const outputDirectory = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDirectory, "index.html");
const employeeArray = [];

function generateQuestions() {
  console.log(
    "Please Select a new team member and follow the prompts!  When you're done hit Quit."
  );
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Which type of Employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "Quit"],
      },
    ])
    .then((answers) => {
      switch (answers.role) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "Quit":
          generateHTML();
          break;
        default:
        // console.log(employeeArray);
      }
    });
}
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the new Managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the new Managers email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the new Managers Office Number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      employeeArray.push(manager);

      generateQuestions();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the new Engineers name?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the new Engineers email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the new Engineers github?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      employeeArray.push(engineer);
      generateQuestions();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the new Interns name?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the new Interns email?",
      },
      {
        type: "input",
        name: "school",
        message: "What school is the intern attending?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      employeeArray.push(intern);
      generateQuestions();
    });
}

function generateHTML() {
  fs.writeFileSync(outputPath, pageTemplate(employeeArray), "UTF-8");
  console.log("Web Page successfully generated.");
}

generateQuestions();
