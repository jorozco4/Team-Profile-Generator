const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("it will create a office number constructor", () => {
  const testValue = "100";
  const e = new Manager("foo", 1, "fake@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("foo", 1, "fake@test.com", "100");
  expect(e.getRole()).toBe(testValue);
});

test("Sets up Manager username()", () => {
  const testValue = "100";
  const e = new Manager("foo", 1, "fake@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
