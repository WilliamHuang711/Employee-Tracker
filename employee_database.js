const express = require('express');
const app = express();
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("listening on port:", port)
});




// function start() {
//     inquirer
//         .prompt({
//             name: "action",
//             type: "rawlist",
//             message: "What would you like to do?",
//             choices: [
//                 "View all employees",
//                 "View all employees by department",
//                 "View all employees by manager",
//                 "Add employee",
//                 "Remove employee",
//                 "Update employee role",
//                 "Update employee manager",
//                 "Add role",
//                 "View all roles",
//                 "Remove role",
//             ]
//         })
//         .then(function (answer) {
//             switch (answer.action) {
//                 case "View all employees":
//                     viewAllEmployees();
//                     break;

//                 case "View all departments":
//                     viewDepartment();
//                     break;

//                 case "View all employees by manager":
//                     viewManager();
//                     break;

//                 case "Add employee":
//                     addEmployee();
//                     break;

//                 case "Remove employee":
//                     removeEmployee();
//                     break;

//                 case "Update employee role":
//                     updateRole();
//                     break;

//                 case "Update employee manager":
//                     updateManager();
//                     break;

//                 case "Add role":
//                     addRole();
//                     break;

//                 case "View all roles":
//                     viewAllRoles();
//                     break;

//                 case "Remove role":
//                     removeRole();
//                     break;



//             }
//         })
// }