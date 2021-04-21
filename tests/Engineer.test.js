it("it will create a GitHub user", () => {
    const testValue = "GithubUser"
    const employee = new Engineer("John", "ID", "fake@test.com", "testValue ");
  expect(employee.github.toBe(testValue);
});

it("getRole() should return \"Engineer\"",() => {
    const testValue = "Engineer"
    const employee = new Engineer ("John", "ID", "fake@test.com", "GitHubUser")
    expect(employee.getRole()).toBe(testValue);
  })
})

it("Sets up GitHub username", () => {
    const testVaule = "GitHubUser"
    const employee = new Engineer("John", "ID", "fake@test.com", "GitHubUser");
  expect(typeof(employee).toBe(object);
});
