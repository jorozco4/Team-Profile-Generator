const Employee = require("./lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Intern";
  }
  gitSchool() {
    return this.school;
  }
}
module.exports = Intern;