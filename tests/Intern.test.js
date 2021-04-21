it("it will create a Intern user", () => {
    const testValue = "InterUser"
    const employee = new Intern("John", "ID", "fake@test.com", "testValue ");
  expect(employee.github.toBe(testValue);
});

it("getRole() should return \"Intern\"",() => {
    const testValue = "Intern"
    const employee = new Intern ("John", "ID", "fake@test.com", "InternUser")
    expect(employee.getRole()).toBe(testValue);
  })
})

it("Sets up Intern username", () => {
    const testVaule = "Intern"
    const employee = new Intern("John", "ID", "fake@test.com", "InternUser");
  expect(typeof(employee).toBe(object);
});
