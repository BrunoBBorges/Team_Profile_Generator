const generateTeam = team => {

    // create the manager html
    const generatemanager = manager => {
        return `

        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getname()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getrole()}</h3>
            </div>
        
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getsid()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getemail()}}">${manager.getemail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getofficenumber()}}</li>
                </ul>
        
                </div>
            </div>
        `;
    };

    // create the html for engineers
    const generateengineer = engineer => {
        return `

    <div class="card employee-card">

        <div class="card-header">
            <h2 class="card-title">${engineer.getname()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getrole()}</h3>
        </div>

        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getid()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getemail()}">${engineer.getemail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getgithub()}" target="_blank" rel="noopener noreferrer">${engineer.getgithub()}</a></li>
            </ul>
        </div>

    </div>
        `;
    };

    // create the html for interns
    const generateintern = intern => {
        return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getname()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getrole()}</h3>
        </div>

        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: {{ id }}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getemail()}">${intern.getemail()}</a></li>
                <li class="list-group-item">School: ${intern.getschool()}</li>
            </ul>
        </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getrole() === "manager")
        .map(manager => generatemanager(manager))
    );
    html.push(team
        .filter(employee => employee.getrole() === "engineer")
        .map(engineer => generateengineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getrole() === "intern")
        .map(intern => generateintern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateteam(team)}
            </div>
        </div>
    </div>
    
</body>
</html>
    `;
};