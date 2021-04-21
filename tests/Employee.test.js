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
      const testValue =  100;
      const employe = new Employee("Foo", testValue)
      expect(employee.id()).toBe(testValue)
  })
  it('creates email for the employee', () => {
    const testValue = "fake@test.com"
    const employe = new Employee("Foo", "ID", testValue)
    expect(employee.email()).toBe(testValue)
})

  describe("getRole",() => {
    it("getRole() should return \"Employee\"",() => {
      const testValue = "Employee"
      const employee = new Employee ("John", "ID", "fake@test.com")
      expect(employee.getRole()).toBe(testValue);
    })
  })