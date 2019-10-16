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

function signIn(user,pass) {
    if(user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, you do not exist!");
    }
}
signIn(userNamePrompt,passwordPrompt);