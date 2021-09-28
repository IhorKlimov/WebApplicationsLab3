const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/lab2.html")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static(__dirname));