const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/lab2.html")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static(__dirname));