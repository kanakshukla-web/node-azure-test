const express = require('express')
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello Kanak !! Welcome to Node with Azure services")
})

app.get("/home", (req, res) => {
    res.send("Hello Kanak !! Welcome to Azure")
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})