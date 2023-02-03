const Product = require("../model/product");

const getAllProducts = async (req, res) => {
    const data = await Product.find(req.query)
    res.status(200).json({data}); 
}

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg: "getAllProductsTesting file"});
}


module.exports = { getAllProducts, getAllProductsTesting };