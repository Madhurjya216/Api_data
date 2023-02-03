const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    Product_name: {
        type: String,
        required: true
    },
    categories_id: {
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        reuire: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: String,
        required: true
    }, 
    feature: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("Product", productSchema);