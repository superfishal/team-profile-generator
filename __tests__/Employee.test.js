const Employee = require("../lib/Employee.js");
const banana = new Employee("Steve", 2, "steve@banana.com");
test("can instatiate an instance of Employee", () => {
  expect(typeof banana).toBe("object");
});
