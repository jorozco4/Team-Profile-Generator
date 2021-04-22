const Employee = require("../lib/Employee");

test("it will create a new employee object", () => {
  const e = new Employee();
  expect(typeof e).toBe(object);
});
test("creates name of employee constructor", () => {
  const name = "James";
  const e = new Employee(name);
  expect(e.name).toBe("James");
});
test("creates ID for the employee", () => {
  const testValue = 100;
  const e = new Employee("James", testValue);
  expect(e.id).toBe(testValue);
});
test("creates email for the employee", () => {
  const testValue = "fake@test.com";
  const e = new Employee("James", 1, testValue);
  expect(e.email).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const e = new Employee();
  expect(typeof e).toBe(object);
});
