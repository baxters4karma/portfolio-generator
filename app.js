const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        }
    ])
    .then(answers => console.log(answers));

// console.log(inquirer);

// const fs = require('fs');
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log(`Portfolio complete! Check out index.html to see the output!`)
// });

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// replace this...
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// with this...
//const [name, github] = profileDataArgs;

// console.log(name, github);
// console.log(generatePage(name, github));

// console.log(profileDataArgs);

// // This...
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('===============');
    
//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);