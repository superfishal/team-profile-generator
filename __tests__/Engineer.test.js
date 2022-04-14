const Engineer = require("../lib/Engineer.js");
const banana = new Engineer("Steve", 2, "steve@banana.com", "steve123");
test("getRole returns Engineer", () => {
  expect(banana.getRole()).toBe("Engineer");
});
