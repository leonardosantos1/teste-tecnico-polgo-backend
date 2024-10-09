const Winner = require("../models/Winner.js")

const createWinnerRepository = ({name, prize, date}) => Winner.create({name, prize, date});

const findWinnerById = (id) => Winner.findById(id);

const deleteWinnerById = (id) => Winner.deleteOne({_id:id});

const findAllWinners = () => Winner.find();

module.exports = {
    createWinnerRepository,
    findAllWinners,
    findWinnerById,
    deleteWinnerById
}