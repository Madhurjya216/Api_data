const express = require("express");
const app = express();
const port = process.env.PORT || 9500;
const products_route = require("./routes/products")
const connectDB = require("./db/connect.js")
require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Server is working all find!")
})

// middleware
app.use("/api/products", products_route);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, (err, data)=>{
            console.log(`Server listening on:${port}`);  
            })    
    } catch (error) {
        console.log(error);
    }
};

start();



// [
//     {
//     "category": "Organic Vegetables",
//     "Product_name": "Fresh Onion",
//     "product_id": 1,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh and organic Onion",
//     "image": "https://img.freepik.com/free-photo/red-onion-whole-isolated-white_146671-19174.jpg?size=626&ext=jpg&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "250/-",
//     "discount": "20% off"
//     },
//     {
//     "category": "Organic Vegetables",
//     "Product_name": "Fresh Tomato",
//     "product_id": 2,
//     "product_rating": 4.6,
//     "description": "We serve you the fresh and organic Tomato",
//     "image": "https://img.freepik.com/free-photo/tomatoes_144627-15411.jpg?size=626&ext=jpg&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "200/-",
//     "discount": "15% off"
//     },
//     {
//     "category": "Organic Vegetables",
//     "Product_name": "Fresh Potato",
//     "product_id": 3,
//     "product_rating": 4.2,
//     "description": "We serve you the fresh and organic Potato",
//     "image": "https://img.freepik.com/premium-photo/potatoes-isolated-white_272787-583.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "180/-",
//     "discount": "10% off"
//     },
//     {
//     "category": "Organic Vegetables",
//     "Product_name": "Fresh Garlic",
//     "product_id": 4,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh Garlic",
//     "image": "https://img.freepik.com/free-photo/fresh-raw-garlic-ready-cook_1150-42636.jpg?size=626&ext=jpg&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "103/-",
//     "discount": "20% off"
//     },
//     {
//     "category": "Organic Vegetables",
//     "Product_name": "Spicy Chlli",
//     "product_id": 5,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh and Spicy Chlli",
//     "image": "https://img.freepik.com/free-photo/red-fresh-chili-peppers-isolated-white_114579-43541.jpg?size=626&ext=jpg&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "140/-",
//     "discount": "20% off"
//     },
//     {
//     "category": "Organic Fruits",
//     "Product_name": "Fresh Apple",
//     "product_id": 6,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh and organic Apples",
//     "image": "https://img.freepik.com/free-photo/front-view-fresh-red-apples-ripe-mellow-fruits-white-desk-fruit-color-tree-fresh-plant-red_140725-110203.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "99/-",
//     "discount": "15% off"
//     },
//     {
//     "category": "Organic Fruits",
//     "Product_name": "Fresh Pineapple",
//     "product_id": 7,
//     "product_rating": 4.8,
//     "description": "We serve you the fresh and organic Pineapple",
//     "image": "https://img.freepik.com/free-photo/pineapple-fruit_1203-7746.jpg?size=338&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "115/-",
//     "discount": "20% off"
//     },
//     {
//     "category": "Organic Fruits",
//     "Product_name": "Fresh Strawberry",
//     "product_id": 8,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh and organic Strawberry",
//     "image": "https://img.freepik.com/free-photo/red-fresh-strawberries-with-green-leaves_114579-10498.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "120/-",
//     "discount": "15% off"
//     },
//     {
//     "category": "Organic Fruits",
//     "Product_name": "Fresh Watermelon",
//     "product_id": 9,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh Watermelon",
//     "image": "https://img.freepik.com/premium-photo/sweet-watermelon-isolated_253984-4202.jpg?size=626&ext=jpg&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "129/-",
//     "discount": "15% off"
//     },
//     {
//     "category": "Organic Fruits",
//     "Product_name": "Fresh Orange",
//     "product_id": 10,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh Orange",
//     "image": "https://img.freepik.com/free-photo/orange-white-white_144627-16571.jpg?size=626&ext=jpg&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "199/-",
//     "discount": "15% off"
//     },
//     {
//     "category": "Organic Fruits",
//     "Product_name": "Fresh Kivi",
//     "product_id": 11,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh Kivi",
//     "image": "https://img.freepik.com/free-photo/fresh-kiwi-fruit-isolated_144627-30034.jpg?size=626&ext=jpg&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "210/-",
//     "discount": "15% off"
//     },
//     {
//     "category": "Diary products",
//     "Product_name": "Organic Milk",
//     "product_id": 12,
//     "product_rating": 5,
//     "description": "We serve you the fresh and organic Milk",
//     "image": "https://img.freepik.com/free-photo/glass-jar-milk-dried-dates-quail-eggs-tablecloth_114579-24850.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=ais",
//     "product_price": "59/-",
//     "discount": "25% off"
//     },
//     {
//     "category": "Diary products",
//     "Product_name": "Organic Eggs",
//     "product_id": 13,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh and organic Eggs",
//     "image": "https://img.freepik.com/free-photo/three-fresh-organic-raw-eggs-isolated-white-surface_114579-43677.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "30/-",
//     "discount": "15% off"
//     },
//     {
//     "category": "Diary products",
//     "Product_name": "Organic Butter",
//     "product_id": 14,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh and organic Butter",
//     "image": "https://img.freepik.com/premium-photo/piece-butter-white-bowl_42687-72.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "20/-",
//     "discount": "35% off"
//     },
//     {
//     "category": "Diary products",
//     "Product_name": "Organic Cheese",
//     "product_id": 15,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh and organic Cheese",
//     "image": "https://img.freepik.com/free-photo/close-up-grated-parmesan_23-2148376113.jpg?size=626&ext=jpg&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "30/-",
//     "discount": "35% off"
//     },
//     {
//     "category": "Fresh meat",
//     "Product_name": "Raw Meat",
//     "product_id": 16,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh Raw meat",
//     "image": "https://img.freepik.com/premium-photo/meat-black-surface_697356-4591.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "300/-",
//     "discount": "25% off"
//     },
//     {
//     "category": "Fresh meat",
//     "Product_name": "raw Fish",
//     "product_id": 17,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh Raw Fish",
//     "image": "https://img.freepik.com/free-photo/hot-pot-shabu-raw-fresh-sliced-fish-plate_1150-35268.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "320/-",
//     "discount": "30% off"
//     },
//     {
//     "category": "Fresh meat",
//     "Product_name": "Raw chicken beast",
//     "product_id": 18,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh raw Chicken Beast",
//     "image": "https://img.freepik.com/free-photo/raw-chicken-breast-dark-surface_1150-43921.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "360/-",
//     "discount": "44% off"
//     },
//     {
//     "category": "Fresh meat",
//     "Product_name": "Raw Mackerel steak",
//     "product_id": 19,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh Mackerel steak",
//     "image": "https://img.freepik.com/free-photo/fresh-mackerel-steak_1339-3349.jpg?size=626&ext=jpg&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "260/-",
//     "discount": "25% off"
//     },
//     {
//     "category": "Fresh meat",
//     "Product_name": "Raw whole chicken",
//     "product_id": 20,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh Raw whole chicken",
//     "image": "https://img.freepik.com/premium-photo/raw-chicken-carcass-cutting-board-isolated-white_109285-1132.jpg?size=626&ext=jpg&ga=GA1.2.1145224334.1665120416&semt=sph",
//     "product_price": "250/-",
//     "discount": "25% off"
//     },
//     {
//     "category": "Packaged foods",
//     "Product_name": "Rolled Oats",
//     "product_id": 21,
//     "product_rating": 4.3,
//     "description": "We serve you the best Oats",
//     "image": "https://rukminim1.flixcart.com/image/612/612/xif0q/cereal-flake/w/v/e/500-rolled-100-wholegrain-high-protein-breakfast-oats-for-weight-original-imagghw8jcxfakdr.jpeg?q=70",
//     "product_price": "280/-",
//     "discount": "35% off"
//     },
//     {
//     "category": "Packaged foods",
//     "Product_name": "Maggie Masala Magic",
//     "product_id": 22,
//     "product_rating": 4,
//     "description": "We serve you the best Maggie products",
//     "image": "https://rukminim1.flixcart.com/image/612/612/xif0q/spice-masala/o/w/s/-original-imaggdxyugmpmkrn.jpeg?q=70",
//     "product_price": "15/-",
//     "discount": "20% off"
//     },
//     {
//     "category": "Packaged foods",
//     "Product_name": "Tomato sauce",
//     "product_id": 23,
//     "product_rating": 4.5,
//     "description": "We serve you the fresh raw Chicken Beast",
//     "image": "https://rukminim1.flixcart.com/image/612/612/l41n2q80/sauce-ketchup/w/a/q/2-tomato-sauce-no-artificial-colours-flavours-100-natural-original-imagffhnuhgduqfj.jpeg?q=70",
//     "product_price": "80/-",
//     "discount": "44% off"
//     },
//     {
//     "category": "Packaged foods",
//     "Product_name": "Raw Peanuts",
//     "product_id": 24,
//     "product_rating": 4,
//     "description": "We serve you the best Raw Peanuts",
//     "image": "https://rukminim1.flixcart.com/image/612/612/kzk6bgw0/pulses/4/s/m/3-raw-peanut-sheng-dana-3kg-1-peanut-producer-original-imagbjktafuymgjg.jpeg?q=70",
//     "product_price": "450/-",
//     "discount": "20% off"
//     },
//     {
//     "category": "Packaged foods",
//     "Product_name": "Peanut butter",
//     "product_id": 25,
//     "product_rating": 4,
//     "description": "We serve you the best Peanut butter",
//     "image": "https://rukminim1.flixcart.com/image/612/612/kyyqpow0/jam-spread/v/j/z/340-whey-protein-peanut-butter-dark-chocolaty-extra-crunchy-1-original-imagb2qewjkyxkyz.jpeg?q=70",
//     "product_price": "500/-",
//     "discount": "20% off"
//     }
// ]
    
