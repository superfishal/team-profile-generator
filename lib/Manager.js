const Employee = require("./Employee.js");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  // rewrites role to Manager from Employee
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
