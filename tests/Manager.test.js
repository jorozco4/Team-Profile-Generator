it("it will create a Manager user", () => {
    const testValue = "ManagerUser"
    const employee = new Intern("John", "ID", "fake@test.com", "Manager ");
  expect(employee.github.toBe(testValue);
});

it("getRole() should return \"Manager\"",() => {
    const testValue = "Manager"
    const employee = new Manager ("John", "ID", "fake@test.com", "Manager")
    expect(employee.getRole()).toBe(testValue);
  })
})

it("Sets up Manager username", () => {
    const testVaule = "Manager"
    const employee = new Manager("John", "ID", "fake@test.com", "Manager");
  expect(typeof(employee).toBe(object);
});
