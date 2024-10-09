const winnerService = require("../services/WinnerService")

async function deleteWinnerByIdController(req,res){
    const id = req.params.id
    const winner = await winnerService.deleteWinnerByIdService(id);
    res.status(200).json(winner)
}

async function createWinnerController(req,res){
    const{name, prize, date} = req.body
    const winner = await winnerService.createWinnerService({name, prize, date})
    res.status(201).json(winner)
}

async function findWinnerByIdController(req,res){
    const id = req.params.id
    const winner = await winnerService.findWinnerByIdService(id)
    res.status(200).json(winner)
}

async function findAllWinnersController(req,res){
    try{
        const winners = await winnerService.findAllWinnersService();
        return res.status(200).json(winners)
    }catch(error){
        res.status(400).json({message:"Não foi possível remover o ganhador"})
    }
}

module.exports = {
    deleteWinnerByIdController,
    createWinnerController,
    findWinnerByIdController,
    findAllWinnersController
}
