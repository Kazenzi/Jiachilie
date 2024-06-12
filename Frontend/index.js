const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require("body-parser");
const UssdMenu = require("ussd-builder");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


const atCredentials = {
    apiKey: 'MyAppAPIkey',
    username: 'MyAppUsername',
}


const AfricasTalking = require("africastalking")(atCredentials);
const sms = AfricasTalking.SMS;


app.listen(3007, () => {
    console.log("App is listening on port 3007");
});

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "safespaceke",
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL database: ", err);
        return;
    }
    console.log("Connected to MySQL database");
});

app.get("/", (req, res) => {
    res.send("Success Message");
});

app.post("/ussd", (req, res) => {
    menu.run(req.body, (ussdResult) => {
        res.send(ussdResult);
    });
});

let menu = new UssdMenu();

menu.startState({
    run: () => {
        menu.con(
            "Welcome to Jiachilie " +
            "\n1. View Upcoming Events" +
            "\n2. Suggest an Event" +
            "\n3. Quit"
        );
    },
    next: {
        "1": "viewEvents",
        "2": "suggestEvent",
        "3": "quit"
    }
});

menu.state('viewEvents', {
    run: () => {
        // Fetch events from the database (mocking here)
        let events = [
            "Habits talk  - June 5th",
            "Stress Management Seminar - June 12th",
            "lets  Talk - June 19th"
        ];

        let eventList = events.join("\n");

        menu.con("Upcoming Events:\n" + eventList + "\n0. Back");
    },
    next: {
        "0": "startState"
    }
});

menu.state('suggestEvent', {
    run: () => {
        menu.con("Enter the event you would like to suggest:");
    },
    next: {
        "*[a-zA-Z0-9 ]+": "saveEventSuggestion"
    }
});

menu.state('saveEventSuggestion', {
    run: () => {
        let suggestion = menu.val;
        // Save the suggestion to the database (mocking here)
        console.log("Event suggestion: " + suggestion);

        menu.end("Thank you for your suggestion! Jiachilie making life better.");
    }
});

menu.state('quit', {
    run: () => {
        menu.end("Thank you for using Jiachilie. Goodbye!");
    }
});
