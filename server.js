const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

const chekup = require("./router/chekup")

app.use("/api/chekup", chekup)

app.use(express.static(__dirname))

app.listen(8000, () => {
    console.log('Server run on port 8000');
})