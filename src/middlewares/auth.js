const adminAuth = (req, res, next) => {
    console.log("admin auth");
    const token = "dfd";
    const isAdminAuthanticated = token === "dfd";
    if (!isAdminAuthanticated) {
        console.log("admin not authanticated");
        res.sendStatus(401);
    } else {
        console.log("admin authanticated");
        es.sendStatus(200);
        next();
    }
}


const userAuth = (req, res, next) => {
    console.log("User auth");
    const token = "dfd";
    const isUserAuthanticated = token === "dfd";
    if (isUserAuthanticated) {
        console.log("user is authanticated");
        res.status(200);
        next();
    } else {
        res.status(401);
        console.log("user is not authanticated");
    }
}

module.exports = adminAuth;
module.exports = userAuth;

