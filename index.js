const express = require("express");
const app = express();

app.get('/', (req, res) => {
    return res.send({
        message: "Welcome to the application"
    })
})

const Port = 5000
app.listen(Port, () => console.log("Server started...." + Port));
