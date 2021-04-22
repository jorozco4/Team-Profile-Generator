const Employee = require("../lib/Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Engineer";
  }

  gitGithub() {
    return this.github;
  }
}

module.exports = Engineer;
