const router = require("express").Router()
const winnerRouter = require("./winner.js")

router.use("/winners", winnerRouter)

module.exports = router