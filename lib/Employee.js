class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = Employee;
  }
  getName() {
    console.log(`Name: ${this.name}`);
  }
  getId() {
    console.log(`Id: ${this.id}`);
  }
  getEmail() {
    console.log(`Email: ${this.email}`);
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
