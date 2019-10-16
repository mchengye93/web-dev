let database = [
    {
        username: "mapo",
        password: "password"
    }
];

let newsFeed = [
    {
        username: "Bob",
        timeline: "So tired of this!"
    },
    {
        username: "Sally",
        timeline: "JavaScript cool!"
    }
] 

let userNamePrompt = prompt('What is your username?');
let passwordPrompt = prompt('What is your password?');

function isUserValid(username, password) {
    for (let i = 0; i < database.length; i++ ) {

        if(username === database[i].username && password === database[i].password) {
            return true;
        }
    }
    return false;
}
function signIn(user,pass) {
 
    if(isUserValid(user,pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, you do not exist!");
    }
}
signIn(userNamePrompt,passwordPrompt);