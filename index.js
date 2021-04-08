const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const employee = require("./lib/employee");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template");
const inquirer = require("inquirer");
const manager = require("./lib/manager");

const teammember = [];
const idarray = [];

function appmenu () {
    
    function createmanager() {
        console.log("Build your team");
        inquirer.prompt ([
            {
                type: "input",
                name: "managername",
                message: "What is the manager's name?",
                valdiate: answeer => {
                    if (answer !== ""){
                        return true;
                    }
                    return "invalid input, try again.";
                }
            },
            {
                type: "input",
                name: "managerid",
                message: "what is the manager's id",
                validate: answer => {
                    const pass = answer.match(
                      /^[1-9]\d*$/
                    );
                    if (pass) {
                      return true;
                    }
                    return "invalid input, try again.";
                }
            },
            {
                type: "input",
                name: "manageremail",
                message: "what is the manager's email?",
                validate: answer => {
                    const pass = answer.match(
                      /\S+@\S+\.\S+/
                    );
                    if (pass) {
                      return true;
                    }
                    return "invalid input, try again.";
                  }
                },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the team manager's office number?",
                validate: answer => {
                    const pass = answer.match(
                       /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "invalid input, try again.";
                 }
             }
        ]).then(answers => {
            const manager = new manager(answers.managername, answers.managerid, answers.manageremail, answer.managerofficenumber);
            teammembers.push(manager);
            idarray.push(manager);
            createteam();
        });
    }

    function createteam() {
        
        inquirer.prompt([
            {
                type: "list",
                name: "memberchoice",
                message: "which type of team member are you adding?",
                choices: [
                    "engineer",
                    "intern", 
                    "i don't want to add any more team members"
                ]
            }
        ]).then(userchoice =>{
            switch(userchoice.memeberchoice) {
                case "engineer":
                    addengineer();
                    break;
                case "intern":
                    addintern();
                    break;
                default:
                    buildteam();
            }
        });
    }

    function addengineer() {
        inquirer.prompt([
            {
                type:"input",
                name:"engineername",
                message:"what is the engineer's name",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "invalid input, try again.";
                }
            },

            {
                type:"input",
                name:"engineerid",
                message:"what's the engineer's id?",
                validate: answer => {
                    const pass = answer.match(
                      /^[1-9]\d*$/
                    );
                    if (pass) {
                      if (idArray.includes(answer)) {
                        return "this id is already taken, please enter a different number.";
                      } else {
                        return true;
                      }
          
                    }
                    return "invalid input, try again.";
                  }
                },
            {
                type: "input",
                name: "engineeremail",
                message: "What is the engineer's email?",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                      );
                      if (pass) {
                        return true;
                      }
                      return "invalid input, try again.";
                    }
                },
                {
                    type: "input",
                    name: "engineergithub",
                    message: "What is the engineer's github username?",
                    validate: answer => {
                      if (answer !== "") {
                        return true;
                      }
                      return "invalid input, try again.";
                    }
                  }    
        ]).then(answers => {
            const engineer = new engineer(answers.engineername, answers.engineerid, answers.engineeremail, answers.engineergithub);
            teammembers.push(engineer);
            idarray.push(answers.engineerid);
            createteam();
          });
    }

    function addintern() {
        inquirer.prompt([
          {
            type: "input",
            name: "internname",
            message: "What is your intern's name?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "invalid input, try again.";
            }
          },
          {
            type: "input",
            name: "internid",
            message: "What is your intern's id?",
            validate: answer => {
              const pass = answer.match(
                /^[1-9]\d*$/
              );
              if (pass) {
                if (idArray.includes(answer)) {
                  return "This ID is already taken. Please enter a different number.";
                } else {
                  return true;
                }
    
              }
              return "invalid input, try again.";
            }
          },
          {
            type: "input",
            name: "internemail",
            message: "What is your intern's email?",
            validate: answer => {
              const pass = answer.match(
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "invalid input, try again.";
            }
          },
          {
            type: "input",
            name: "internschool",
            message: "What is your intern's school?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "invalid input, try again.";
            }
          }
        ]).then(answers => {
          const intern = new Intern(answers.internname, answers.internid, answers.internemail, answers.internschool);
          teammembers.push(intern);
          idarray.push(answers.internid);
          createTeam();
        });
      }
    
    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teammembers), "utf-8");
    }
    
    createManager();
    
}
    
appMenu();