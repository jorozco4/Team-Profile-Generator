const Engineer = require("../lib/Engineer");

test("it will create a GitHub user", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("foo", 1, "fake@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("foo", 1, "fake@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Sets up GitHub username()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("foo", 1, "fake@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
