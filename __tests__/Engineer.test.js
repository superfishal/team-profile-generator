const Engineer = require("../lib/Engineer.js");
const banana = new Engineer("Steve", 2, "steve@banana.com", "steve123");
test("getRole returns Engineer", () => {
  expect(banana.getRole()).toBe("Engineer");
});
test("can set github username", () => {
  const testSubject = new Engineer(
    "Andy",
    123,
    "andy@email.com",
    "superfishal"
  );
  expect(testSubject.github).toBe("superfishal");
});
test("getGithub returns github username input", () => {
  expect(banana.getGithub()).toBe("steve123");
});
