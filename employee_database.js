const mysql = require('mysql');
const inquirer = require('inquirer');

var connection =mysql.createConnection({
    host: 'localhost',

    port:3306,

    user:'root',

    password: 'Hh1998711.',
    database:'employee_cms_db'
});

connection.connect(function(err) {
    if (err) throw err;
    
    start();
  });