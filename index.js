const express = require("express");

const app = express();
app.use(express.json());

const notes = []; // This is bad -- eventually we'll learn about databases (mongodb, postgres, mysql)

// POST - Create a note
app.post("/notes", function(req, res) {
    const note = req.body.note;
    notes.push(note);

    res.json({
        message: "Done!"
    })
})

// GET - get all my notes 
app.get("/notes", function(req, res) {
    res.json({
        notes
    })
})

app.get("/", function(req, res) {
    res.sendFile("/Users/harkirat/Projects/bootcamp/week-9-notes-app/frontend/index.html")
})

app.listen(3000);