const fs = require('fs');
const generatePage = require('./src/page-template');
const inquirer = require("inquirer");

const addManager = () => {
   
    return inquirer.prompt([

        {
            type: "input", 
            name: "name", 
            message: "Please enter your Team Manager's name.",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("You must enter your Team Manager's name!");
                    return false;
                }   
            }
        }, 
        {
            type: "input", 
            name: "id", 
            message: "Please enter your Team Manager's employee ID.",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("You must enter your Team Manager's employee ID!");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "email", 
            message: "Please enter your Team Manager's email address.", 
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("You must enter you Team Manager's email address!");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "officeNumber", 
            message: "Please enter your Team Manager's office number.", 
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true;
                } else {
                    console.log("You must enter your Team Manager's office number!");
                    return false;
                }
            }
        }
     
    ])
    .then(managerData => {
        templateData = {};
        templateData.manager = [];
        templateData.manager.push(managerData);
        return templateData
          
        })
}

const teamOption = templateData => {
    return inquirer.prompt([

        {
            type: "list", 
            name: "role", 
            message: "Would you like to add an Engineer, Intern or finish up?", 
            choices: ["Engineer", "Intern", "Finish Up!"]
        }
        
    ])
    .then(userChoice => {
        switch (userChoice.role) {
          case "Engineer":
            addEngineer(templateData);
            break;
          case "Intern":
            addIntern(templateData);
            break;
          default: "Finish Up"
          return templateData;  
        
        }
      });
}

const addEngineer = (templateData) => {
    return inquirer.prompt([
        {
            type: "input", 
            name: "name",
            message: "Please enter your Engineer's name.", 
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("You must enter your Engineer's name!");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "id", 
            message: "Please enter your Engineer's emloyee ID.", 
            validate: engIdInput => {
                if (engIdInput) {
                    return true;
                } else {
                    console.log("You must enter your Engineer's employee ID!");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "email", 
            message: "Please enter your Engineer's email address.", 
            validate: engEmailInput => {
                if (engEmailInput) {
                    return true;
                } else {
                    console.log("You must enter your Engineer's email address!");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "github", 
            message: "Please enter your Engineer's GitHub username.", 
            validate: engGitHubInput => {
                if (engGitHubInput) {
                    return true;
                } else {
                    console.log("You must enter your Engineer's github username!")
                    return false;
                }
            }
        }
    ])
    // .then(engineerData => {
    //     templateData = {};
    //     templateData.engineer = [];
    //     templateData.engineer.push(engineerData);
    //         return templateData;
    //     })
}

const addIntern = (templateData) => {
    return inquirer.prompt([

        {
            type: "input", 
            name: "name", 
            message: "Please enter your Intern's name.", 
            validate: intNameInput => {
                if (intNameInput) {
                    return true;
                } else {
                    console.log("You must enter your Intern's name!");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "id", 
            message: "Please enter your Intern's employee ID", 
            vlidate: intIdInput => {
                if (intIdInput) {
                    return true;
                } else {
                    console.log("You must enter your Intern's employee ID!");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "email", 
            message: ("Please enter your Intern's email address."),
            validate: intEmailInput => {
                if (intEmailInput) {
                    return true;
                } else {
                    console.log("You must enter your Intern's email address!");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "school", 
            message: "Please enter the name of the school that your Intern is currently enrolled at.", 
            validate: intSchoolInput => {
                if (intSchoolInput) {
                    return true;
                } else {
                    console.log("You must enter the name of your Intern's school!");
                    return false;
                }
            }
        }
    ])
}


// addManager().then(answers => console.log(answers));
addManager()
// .then(teamOption)
.then(teamData => {
    const pageHTML = generatePage(teamData);
    fs.writeFile("./main.html", pageHTML, err => {
        if (err) throw new Error(err);
        console.log("Your Team Memeber page has been created!");
    })
})
// .then(teamOption)
// .then(addEngineer)
// .then(addIntern)




// const addManager = () => {
   
//     return inquirer.prompt([

//         {
//             type: "input", 
//             name: "name", 
//             message: "Please enter your Team Manager's name.",
//             validate: managerNameInput => {
//                 if (managerNameInput) {
//                     return true;
//                 } else {
//                     console.log("You must enter your Team Manager's name!");
//                     return false;
//                 }   
//             }
//         }, 
//         {
//             type: "input", 
//             name: "id", 
//             message: "Please enter your Team Manager's employee ID.",
//             validate: employeeIdInput => {
//                 if (employeeIdInput) {
//                     return true;
//                 } else {
//                     console.log("You must enter your Team Manager's employee ID!");
//                     return false;
//                 }
//             }
//         }, 
//         {
//             type: "input", 
//             name: "email", 
//             message: "Please enter your Team Manager's email address.", 
//             validate: managerEmailInput => {
//                 if (managerEmailInput) {
//                     return true;
//                 } else {
//                     console.log("You must enter you Team Manager's email address!");
//                     return false;
//                 }
//             }
//         }, 
//         {
//             type: "input", 
//             name: "officeNumber", 
//             message: "Please enter your Team Manager's office number.", 
//             validate: officeNumInput => {
//                 if (officeNumInput) {
//                     return true;
//                 } else {
//                     console.log("You must enter your Team Manager's office number!");
//                     return false;
//                 }
//             }
//         }
     
//     ])
//     .then(managerData => {
//         templateData = {};
//         templateData.manager = [];
//         templateData.manager.push(managerData);
//         x = teamOption(templateData)
//         return x
        
          
//         })
// }

// const teamOption = templateData => {
//     return inquirer.prompt([

//         {
//             type: "list", 
//             name: "role", 
//             message: "Would you like to add an Engineer, Intern or finish up?", 
//             choices: ["Engineer", "Intern", "Finish Up!"]
//         }
        
//     ])
//     .then(userChoice => {
//         switch (userChoice.role) {
//           case "Engineer":
//            x = addEngineer(templateData);
//             return x
//           case "Intern":
//            x = addIntern(templateData);
//            return x
            
//           default: "Finish Up"
//           return templateData;  
        
//         }
//       });
// }
