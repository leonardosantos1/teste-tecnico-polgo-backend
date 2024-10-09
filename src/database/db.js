const mongoose = require("mongoose");

function connectionDatabase(){
    console.log("Wait connecting to the database")
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xafiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error))
}

module.exports = connectionDatabase