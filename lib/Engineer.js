const Employee = require("./lib/Employee");

class Enginer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}
