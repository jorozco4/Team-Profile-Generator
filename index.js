const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const generateHTML = (allEmployees) => {
  return `<!DOCTYPE html>
  <html>
   <head>
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
    <style>
    .row {
        display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 20px;
margin-bottom: 10px;
}
.card{
  background-color: red;
  color: white;
}
</style>
    <title> Team Profile Generator </title>
    </head>
    <body>
    <div class="jumbotron">
      <h1 class="text-center">My Team</h1>
    </div>
    <div class="container">
      <div class="row col-sm-6 col-sm-offset-3">
     
        
        <div class="card border-success mb-3" style="max-width: 18rem">
          <div class="card-header bg-transparent border-success">
            ${allEmployees[0].name}
            <br />
            <i class="bi bi-file-person">${allEmployees[0].role}</i>
          </div>
          <div class="card-body text-success">
            <ul class="list-group">
              <li class="list-group-item">ID: ${allEmployees[0].ID}</li>
              <li class="list-group-item">
                Email:
                <a href="mailto:${allEmployees[0].email}">${allEmployees[0].email}</a>
              </li>
              <li class="list-group-item">
                Office number: ${allEmployees[0].officeNumber}
              </li>
              <li class="list-group-item">
                Github:
                <a href="https://github.com/${allEmployees[0].github}"
                  >${allEmployees[0].github}</a
                >
              </li>
              <li class="list-group-item">
              School name: ${allEmployees[0].school}
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>`;
};

var allEmployees = [];
var question = [
  {
    type: "input",
    name: "name",
    message: "What is your Managers Name?",
  },
  {
    type: "input",
    message: "What is your Managers ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is your Managers email?",
    name: "email",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
  },
  {
    type: "input",
    message: "What is your Github?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your School Name?",
    name: "school",
  },

  {
    type: "list",
    message: "What is your Managers role?",
    choices: ["Engineer", "Intern", "Manager"],
    name: "role",
  },
  {
    type: "confirm",
    name: "askAgain",
    message: "Do You want to add another employee",
    default: false,
  },
];
const promptUser = () => {
  return inquirer.prompt(question);
};

promptUser().then((answers) => {
  allEmployees.push(answers);
  if (answers.askAgain) {
    promptUser();
  } else {
    const htmlPageContent = generateHTML(allEmployees);

    writeFileAsync("team.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  }
});
