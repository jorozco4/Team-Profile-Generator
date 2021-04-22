const Employee = require("../lib/Intern");

test("it will create school constructor", () => {
  const testValue = "GMU";
  const e = new Intern("James", 1, "fake@test.com", "testValue ");
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("James", 1, "fake@test.com", "InternUser");
  expect(e.getRole()).toBe(testValue);
});

test("Sets up Intern username", () => {
  const testVaule = "GMU";
  const e = new Intern("James", 1, "fake@test.com", "testValue");
  expect(e.getSchool()).toBe(testValue);
});
