const createTeam = team => {
  console.log(team);
  console.log("help")
  const teamHTML = [];

  const generateManager = manager => {
    // console.log(manager);
    
    return `
    <div class="card col-3">
      <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <p class="card-text">Manager</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office#: ${manager.officeNumber}</li>
      </ul>
    </div>
    `;

    
  }

  const generateEngineer = engineer => {
    console.log(engineer);

    return `
    <div class="card col-3">
      <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <p class="card-text">Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
      </ul>
    </div>
    `;
  }

  const generateIntern = intern => {
    console.log();

    return `
    <div class="card col-3">
      <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <p class="card-text">Intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
    `;
  }
  // teamHTML.push(managerArrHTML);
    // generateManager();
    teamHTML.push(
      team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
    );
    
    teamHTML.push(
      team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
    );
    
    teamHTML.push(
      team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
    );
    

    return teamHTML.join("");
  }





module.exports = team => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./src/style.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Member Profile</title>
  </head>
  <div class="container-fluid">
  <body>
      <header>
          <h1 class="text-center">
              My Team
          </h1>
      </header>
    <div class="row">
    ${createTeam(team)}
    </div>
  </body>
  </div>
  `
}
  




















  // return `
  // <div>
  // ${managerHtmlArr.join(" ")}
  // </div>
  // `;

// const generateEngineer = engineerArr => {
//   engineerHtmlArr = engineerArr.map(({ name, id, email, github }) => {


//  return `
//  <div class="card">
//    <div class="card-body">
//      <h5 class="card-title"></h5>
//      <p class="card-text">${name}</p>
//    </div>
//    <ul class="list-group list-group-flush">
//      <li class="list-group-item">${id}</li>
//      <li class="list-group-item">${email}</li>
//      <li class="list-group-item">${github}</li>
//    </ul>
//  </div>
//  `;
//  });

//  return `
//  <div>
//  ${engineerHtmlArr.join(" ")}
//  </div>
//  `;
// };

// const generateIntern = internArr => {
//   internHtmlArr = internArr.map(({ name, id, email,  }) => {


//  return `
//  <div class="card">
//    <div class="card-body">
//      <h5 class="card-title"></h5>
//      <p class="card-text">${name}</p>
//    </div>
//    <ul class="list-group list-group-flush">
//      <li class="list-group-item">${id}</li>
//      <li class="list-group-item">${email}</li>
//      <li class="list-group-item">${officeNumber}</li>
//    </ul>
//  </div>
//  `;
//  });

//  return `
//  <div>
//  ${internHtmlArr.join(" ")}
//  </div>
//  `;
// };



// module.exports = (templateData) => {
//   console.log(templateData);
//   const { name, id, email, officeNumber } = templateData;
// return `
// <!DOCTYPE html> 
// <html lang="en"> 
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
//   <link rel="stylesheet" href="style.css">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Team Member Profile</title>
// </head>

// <body>
//     <header>
//         <h1 class="text-center">
//             My Team
//         </h1>
//     </header>
// <div class="row">
  // <div class="card">
  //   <div class="card-body">
  //     <h5 class="card-title"></h5>
  //     <p class="card-text">${name}</p>
  //   </div>
  //   <ul class="list-group list-group-flush">
  //     <li class="list-group-item">${id}</li>
  //     <li class="list-group-item">${email}</li>
  //     <li class="list-group-item">${officeNumber}</li>
  //   </ul>
  // </div>
// </div>    
// </body>
// `
// }

