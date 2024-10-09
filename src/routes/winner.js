const winnerRouter  = require("express").Router()
const winnerController = require("../controllers/WinnerController")
const validateWinnerSchema = require("../middlewares/validateWinnerSchema")

winnerRouter.get("/:id",winnerController.findWinnerByIdController)
winnerRouter.get("/",winnerController.findAllWinnersController)
winnerRouter.post("/",validateWinnerSchema, winnerController.createWinnerController)
winnerRouter.delete("/:id",winnerController.deleteWinnerByIdController)

module.exports = winnerRouter



