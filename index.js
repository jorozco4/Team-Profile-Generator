const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html>
  <title><head> Team Profile Generator </head></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
  
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
  />
  
  <script
    src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"
  ></script>
  <body>
    <div class="jumbotron">
      <h1 class="text-center">My Team</h1>
    </div>
    <div class="container">
      <div class="col-sm-6 col-sm-offset-3">
    <div class="card border-success mb-3" style="max-width: 18rem">
      <div class="card-header bg-transparent border-success">John
        <br>
        <i class="bi bi-file-person">Employee</i>
      </div>
      <div class="card-body text-success">
        
       
        <ul class="list-group">
          <li class="list-group-item">ID: ${answers.ID}</li>
          <li class="list-group-item">Email: ${answers.email}</li>
          <li class="list-group-item">Office number: ${answers.officenumber}</li>
        </ul>
      </div>
      
    </div>
    <div class="card border-success mb-3" style="max-width: 18rem">
      <div class="card-header bg-transparent border-success">James
        <br>
        <i class="bi bi-person-circle">Manager</i>
      </div>
      <div class="card-body text-success">
      
        <ul class="list-group">
          <li class="list-group-item">ID: ${answers.ID}</li>
          <li class="list-group-item">Email: ${answers.email}</li>
          <li class="list-group-item">Github: ${answers.github}</li>
        </ul>
      </div>
      
    </div>
    <div class="card border-success mb-3" style="max-width: 18rem">
      <div class="card-header bg-transparent border-success">James</div>
      <div class="card-body text-success">
        <h5 class="card-title">Engineer</h5>
        <ul class="list-group">
          <li class="list-group-item">ID: ${answers.ID}</li>
          <li class="list-group-item">Email: ${answers.email}</li>
          <li class="list-group-item">Github: ${answers.github}</li>
        </ul>
      </div>
      <div class="card-footer bg-transparent border-success">Footer</div>
    </div>
    <div class="card border-success mb-3" style="max-width: 18rem">
      <div class="card-header bg-transparent border-success">James
        <br>
        <i class="bi bi-wrench">Engineer</i>
      </div>
      <div class="card-body text-success">
        
        <ul class="list-group">
          <li class="list-group-item">ID: ${answers.ID}</li>
          <li class="list-group-item">Email: ${answers.email}</li>
          <li class="list-group-item">Github: ${answers.github}</li>
        </ul>
      </div>
   
    </div>
    <div class="card border-success mb-3" style="max-width: 18rem">
      <div class="card-header bg-transparent border-success">James
        <br>
        <i class='fas fa-user-graduate' style='font-size:24px'>Intern</i>
      </div>
      <div class="card-body text-success">
       
        <ul class="list-group">
          <li class="list-group-item">ID: ${answers.ID}</li>
          <li class="list-group-item">Email: ${answers.email}</li>
          <li class="list-group-item">School: ${answers.schoolName}</li>
        </ul>
      </div>
      <div class="card-footer bg-transparent border-success">Footer</div>
    </div>
  </body>
</html>`;

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your Managers Name?",
    },
    {
      type: "input",
      message: "What is your Managers ID",
      name: "ID",
    },
    {
      type: "input",
      message: "What is your Managers email",
      name: "email",
    },
    {
      type: "input",
      message: "What is your Managers role",
      choices: ["Engineer", "Intern", "Manager"],
      name: "role",
    },

    {
      type: "input",
      message: "What is your Github",
      name: "github",
    },
    {
      type: "input",
      message: "What is your School Name",
      name: "schoolName",
    },
  ]);
};

promptUser().then((answers) => {
  const htmlPageContent = generateHTML(answers);

  writeFileAsync("index.html", htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
});
