const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://ROHIT_31:865858@cluster0.rczpxv1.mongodb.net/?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose