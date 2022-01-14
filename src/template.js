const fs = require('fs');
const generateHTML = ({manager, intern, engineer}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>My Team</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${name}</h1>
    <ul class="list-group">
    <li class="list-group-item">email: ${email}</li>
      <li class="list-group-item">GitHub ${github}</li>
    </ul>
  </div>
</div>
</body>
</html>`;


 // .then((answers) => {
    const htmlPageContent = generateHTML(team);

    fs.writeFile('team.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created team.html!')
    );
