// JS for Section 10 Lesson 100 - Multi User Facebook

var database = [
    {
        username: "bob",
        password: "pass"
    },
    {
        username: "joan",
        password: "123"
    },
    {
        username: "mike",
        password: "321"
    }
];

var newsFeed =[
    {
        username: database[0].username,
        timelineItems: [
            {
                username: "mike",
                timeline: "What a day! Phew!!"
            },
            {
                username: "joan",
                timeline: "Made cake and ate it."
            },
            {
                username: "mike",
                timeline: "Eating lemon jelly"
            }
        ]
    },
    {
        username: database[1].username,
        timelineItems: [
            {
                username: "james",
                timeline: "What a day! Phew!!"
            },
            {
                username: "bob",
                timeline: "Made cake and ate it."
            },
            {
                username: "malcom",
                timeline: "Eating lemon jelly"
            }
        ]
    },
    {
        username: database[2].username,
        timelineItems: [
            {
                username: "jim",
                timeline: "What a day! Phew!!"
            },
            {
                username: "sarah",
                timeline: "Made cake and ate it."
            },
            {
                username: "jane",
                timeline: "Eating lemon jelly"
            }
        ]
    }
];

function isUserValid(username,password) {
    for (var i = 0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function displayNewsFeed(timeline) {

    var feedContainer = document.getElementById('newsfeed');
    feedContainer.innerHTML += "<ul>";
    for (var i = 0; i < timeline.length; i++) {
        feedContainer.innerHTML += "<li>" + timeline[i].username + ": " + timeline[i].timeline + "</li>";
    }
    feedContainer.innerHTML += "</ul>";
    // console.log(newsItems);

}

function getNewsFeed(username){
    for (var i = 0; i < newsFeed.length; i++) {
        if(username === newsFeed[i].username) {
            var timelineItems = newsFeed[i].timelineItems;
            // console.log(timelineItems);
            displayNewsFeed(timelineItems);
        }
    }
    return false;
}

function signIn(username,password) {
    if(isUserValid(username,password)){
        getNewsFeed(username);
    } else {
        alert("Sorry, wrong username and password.");
    }

}

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(usernamePrompt,passwordPrompt);