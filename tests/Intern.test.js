const Intern = require("../lib/Intern");

test("it will create school constructor", () => {
  const testValue = "GMU";
  const e = new Intern("foo", 1, "fake@test.com", testValue, "Intern");
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("foo", 1, "fake@test.com", "GWU", "Intern");
  expect(e.getRole()).toBe(testValue);
});

test("Sets up Intern getSchool()", () => {
  const testValue = "GMU";
  const e = new Intern("foo", 1, "fake@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
