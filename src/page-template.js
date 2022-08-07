const createTeam = team => {
  console.log(team);
  console.log("help")
  const teamHTML = [];

  // Template for Manager Card
  const generateManager = manager => {
    // console.log(manager);
    
    return `
    <div class="card col-lg-2 col-sm-12 m-2 bg-primary">
      <div class="card-body bg-primary">
        <h2 class="card-title">${manager.name}</h2>
        <p class="card-text h4">Manager</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item h5">ID: ${manager.id}</li>
        <li class="list-group-item h5">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item h5 mb-2">Office#: ${manager.officeNumber}</li>
      </ul>
    </div>
    `;

    
  }

  // Template for Engineer Card
  const generateEngineer = engineer => {
    console.log(engineer);

    return `
    <div class="card col-lg-2 col-sm-12 m-2 bg-primary">
      <div class="card-body bg-primary">
        <h2 class="card-title">${engineer.name}</h2>
        <p class="card-text h4">Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item h5">ID: ${engineer.id}</li>
        <li class="list-group-item h5">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item h5 mb-2">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
      </ul>
    </div>
    `;
  }

  // Template for Intern Card
  const generateIntern = intern => {
    console.log();

    return `
    <div class="card col-lg-2 col-sm-12 m-2 bg-primary">
      <div class="card-body bg-primary">
        <h2 class="card-title">${intern.name}</h2>
        <p class="card-text h4">Intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item h5">ID: ${intern.id}</li>
        <li class="list-group-item h5">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item h5 mb-2">School: ${intern.school}</li>
      </ul>
    </div>
    `;
  }
  // teamHTML.push(managerArrHTML);
    // generateManager();

    // Pushes each role's information into teamHTMl array.
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
  // Template for entire html page.
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
      <header class="bg-danger mb-5 pt-2 pb-2">
          <h1 class="text-center">
              My Team
          </h1>
      </header>
    <div class="row d-flex justify-content-center">
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

