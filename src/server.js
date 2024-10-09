require("dotenv").config()
const express = require('express')
const router = require("./routes/index.js")
const connectionDatabase = require("./database/db.js")
var cors = require('cors')

const app = express()
app.use(cors({
    origin: `${process.env.ORIGIN_CORS}`
}));

const port = process.env.PORT

connectionDatabase()

app.use(express.json())

app.use('/', router)

app.listen(port)
