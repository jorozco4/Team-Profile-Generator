const Employee = require("../lib/Engineer");

test("it will create a GitHub user", () => {
  const testValue = "GithubUser";
  const e = new Engineer("James", 1, "fake@test.com", "testValue ");
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("James", 1, "fake@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Sets up GitHub username", () => {
  const testVaule = "GitHubUser";
  const e = new Engineer("James", 1, "fake@test.com", "testValue");
  expect(e.getGithub()).toBe(object);
});
