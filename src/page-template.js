const generateManager = managerArr => {
   managerHtmlArr = managerArr.map(({ name, id, email, officeNumber }) => {

 
  return `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">${name}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${id}</li>
      <li class="list-group-item">${email}</li>
      <li class="list-group-item">${officeNumber}</li>
    </ul>
  </div>
  `;
  });

  return `
  <div>
  ${managerHtmlArr.join(" ")}
  </div>
  `;
};

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


module.exports = (templateData) => {
  console.log(templateData);
  const { manager } = templateData;
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
  ${generateManager(manager)}
</div>    
</body>
`
}









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

