const express = require("express");

const app = express();

app.use("/", (req, res) => {
    res.send("just / thing");
});

app.use("/about", (req, res) => {
    res.send("This is about page");
});

app.use((req, res) => {
    res.send("Hello from the server");
});

app.listen(3000, () => {
    console.log("server started successfully");
});

