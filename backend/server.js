const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("API is running!");
});

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
