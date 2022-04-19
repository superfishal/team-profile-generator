const Intern = require("../lib/Intern.js");
const banana = new Intern("Steve", 2, "steve@email.com", "Hogwarts");
test("getRole() returns Intern", () => {
  expect(banana.getRole()).toBe("Intern");
});
test("set school with constructor", () => {
  const testValue = "Oregon";
  const testSubject = new Intern("Bob", 3, "Bob@email.com", testValue);
  expect(testSubject.school).toBe(testValue);
});
test("getSchool() returns school input", () => {
  const testValue = "Hogwarts";
  const testSubject = new Intern("Steve", 2, "steve@email.com", testValue);
  expect(testSubject.getSchool()).toBe(testValue);
});
