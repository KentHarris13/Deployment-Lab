const express = require('express')
const path = require('path')

const app = express()

app.get('/js', function(req, res) {
    res.sendFile(path.join(__dirname,"../homepage.html"))
})

app.get('/css', function(req, res) {
    res.sendFile(path.join(__dirname,"../styles.css"))
})

const port = process.env.PORT || 4200

app.listen(port, () => console.log(`We have our heading at ${port}`))