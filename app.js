const express = require('express')
const app = express()

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send("This is the homepage");
})

app.listen(port, () => {
    console.log('App is listening!')
});

