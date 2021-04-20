const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("it will create a new employee object", () => {
      const employee = new Employee();
    expect(typeof(employee).toBe(object);
  });
  it('creates name of employee constructor',() => {
      const name = "John"
      const employee = new Employee(name, 'ID', 'fakeemail@gmail.com',)
      expect(employee.getName()).toBe('john')
  });
  it('creates ID for the employee', () => {
      const id = '31'
      const employe = new Employee()
  }