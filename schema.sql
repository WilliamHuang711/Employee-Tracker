DROP DATABASE IF EXISTS employee_cms_db;

CREATE DATABASE employee_cms_db;
USE employee_cms_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE  employee (
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(30) NOT NULL, 
    last_name  VARCHAR(30) NOT NULL, 
    role_id INT, 
    manager_id INT NULL
)