const Manager = require("../lib/Manager.js");
const banana = new Manager("Steve", 2, "steve@banana.com", "steve123");
test("getRole() returns Manager", () => {
  expect(banana.getRole()).toBe("Manager");
});
test("set office number with constructor", () => {
  const testValue = 123;
  const testSubject = new Manager("Andy", 1, "andy@email.com", testValue);
  expect(testSubject.officeNumber).toBe(testValue);
});
test("get office number with getOfficeNumber()", () => {
  const testValue = 111;
  const testSubject = new Manager("Andy", 1, "andy@email.com", testValue);
  expect(testSubject.getOfficeNumber()).toBe(testValue);
});
