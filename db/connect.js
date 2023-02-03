const mongoose = require("mongoose");

// const url = `mongodb+srv://test:root@cluster0.bhlqwzf.mongodb.net/API?retryWrites=true&w=majority`

const connectDB = (url) => {
    console.log("connected to the database!");
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;