const { config } = require("dotenv");
const connectDB = require("./db/connect");
const product = require("./model/product");
require("dotenv").config();
const productJson = require("./products.json");

const start = async () => {
    try{
        console.log("successfull!");
        await connectDB(process.env.MONGODB_URL);
        await product.create(productJson);
    } catch (error){
        console.log(error);
    }
}
start();