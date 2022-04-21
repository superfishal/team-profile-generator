// function to generate manager/engineer/intern cards to place in HTML page
const htmlPageElements = (employeeArray) => {
  console.log(employeeArray);
  // manager card element
  const managerCardEl = (manager) => {
    return `
    <div class="card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
`;
  };
  const engineerCardEl = (engineer) => {
    return `
    <div class="card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
`;
  };
  const internCardEl = (intern) => {
    return `
    <div class="card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
`;
  };
  // html page
  const html = [];

  html.push(
    employeeArray
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCardEl(manager))
  );
  html.push(
    employeeArray
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCardEl(engineer))
      .join("")
  );
  html.push(
    employeeArray
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCardEl(intern))
      .join("")
  );

  return html.join("");
};
module.exports = (employeeArray) => {
  return `    <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Generated Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                ${htmlPageElements(employeeArray)}
            </div>
        </div>
    </div>
</body>
</html>`;
};
