const winnerRepository = require("../repositories/WinnerRepository")


async function findAllWinnersService(){
    const winners = await winnerRepository.findAllWinners()
    return winners
}

async function createWinnerService({name, prize, date}){
    await winnerRepository.createWinnerRepository({name, prize, date})
    return {message:"Usuario criado com sucesso!"}
}

async function findWinnerByIdService(id){
    try{
        const winner = await winnerRepository.findWinnerById(id)
        if(!winner) return {message:"Ganhador não encontrado"}
        return winner
    }catch(err){
        return {message:"Ganhador não encontrado"}
    }
}

async function deleteWinnerByIdService(id){
    try{
        const winner = await winnerRepository.deleteWinnerById(id)
        console.log(winner)
        return {message:"Usuario deletado com sucesso!"}

    }catch(err){
        return {message:"Não foi possível remover o ganhador"}
    }
}

module.exports={
    createWinnerService,
    findAllWinnersService,
    findWinnerByIdService,
    deleteWinnerByIdService
}