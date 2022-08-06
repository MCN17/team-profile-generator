const createTeam = team => {
  console.log(team);
  console.log("help")
  const teamHTML = [];

  const generateManager = manager => {
    // console.log(manager);
    
    return `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">${manager.name}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.id}</li>
        <li class="list-group-item">${manager.email}</li>
        <li class="list-group-item">${manager.officeNumber}</li>
      </ul>
    </div>
    `;

    
  }

  const generateEngineer = engineer => {
    console.log(engineer);

    return `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">${engineer.name}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.id}</li>
        <li class="list-group-item">${engineer.email}</li>
        <li class="list-group-item">${engineer.officeNumber}</li>
      </ul>
    </div>
    `;
  }

  const generateIntern = intern => {
    console.log();

    return `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">${intern.name}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.id}</li>
        <li class="list-group-item">${intern.email}</li>
        <li class="list-group-item">${intern.officeNumber}</li>
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
    <link rel="stylesheet" href="style.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Member Profile</title>
  </head>
  
  <body>
      <header>
          <h1 class="text-center">
              My Team
          </h1>
      </header>
  <div class="row">
    <div>${createTeam(team)}</div>
  </div>    
  </body>
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

