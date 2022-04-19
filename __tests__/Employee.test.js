// Employee constructor order (name, id, email, role)
const Employee = require("../lib/Employee.js");
// best to  use new testSubject and new testValue for every test
// const testSubject = new Employee("Steve", 2, "steve@banana.com");
test("can instatiate an instance of Employee", () => {
  const testSubject = new Employee();
  expect(typeof testSubject).toBe("object");
});
test("set name with constructor arguments", () => {
  const name = "Andy";
  const testSubject = new Employee(name);
  expect(testSubject.name).toBe(name);
});
test("set id with constructor arguments", () => {
  const testValue = "123";
  const testSubject = new Employee("Andy", testValue);
  expect(testSubject.id).toBe(testValue);
});
test("set email with constructor arguments", () => {
  const testValue = "andy@email.com";
  const testSubject = new Employee("Andy", 123, testValue);
  expect(testSubject.email).toBe(testValue);
});
// test getName()/getEmail()/getId()/getRole() tests
test("getName() should return Employee name", () => {
  const testValue = "Andy";
  const testSubject = new Employee(testValue);
  expect(testSubject.getName()).toBe(testValue);
});
test("getEmail() returns email", () => {
  const testValue = "andy@email.com";
  const testSubject = new Employee("Andy", 123, "andy@email.com");
  expect(testSubject.getEmail()).toBe(testValue);
});
test("getId() returns id number", () => {
  const testValue = 123;
  const testSubject = new Employee("Andy", testValue);
  expect(testSubject.getId()).toBe(testValue);
});
test("getRole() should return Employee", () => {
  const testValue = "Employee";
  const testSubject = new Employee("Andy", 123, "andy@email.com");
  expect(testSubject.getRole()).toBe(testValue);
});
