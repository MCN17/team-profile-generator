module.exports = (templateData) => {
  console.log(templateData);
  const { teamMembers, about, ...manager } = templateData;
return `
<!DOCTYPE html> 
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Profile Generator</title>
</head>

<body>
    <header>
        <h1 class="text-center">
            My Team
        </h1>
    </header>
<div class="row">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">${manager.name}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.id}</li>
      <li class="list-group-item">${manager.email}</li>
      <li class="list-group-item">${manager.officeNum}</li>
    </ul>
  </div>
</div>    
</body>
`
}

// module.exports = generatePage

