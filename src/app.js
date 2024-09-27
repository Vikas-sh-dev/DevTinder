const express = require("express");

const app = express();



app.get("/about/:userId", (req, res) => {
    console.log(req.params);
    res.send("This is about page");
});

app.post("/about", (req, res) => {
    res.send("Posted");
});

app.delete("/about", (req, res) => {
    res.send("Deleted");
});


app.get((req, res) => {
    res.send("Hello from the server");
});



app.listen(3000, () => {
    console.log("server started successfully");
});

