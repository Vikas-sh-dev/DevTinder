const express = require("express");
const adminAuth = require("./middlewares/auth");
const userAuth = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
    res.send("All user data");
})


app.get("/user", userAuth, (req, res) => {
    res.send("Vikas Profile");
});



app.listen(3000, () => {
    console.log("server started successfully");
});

