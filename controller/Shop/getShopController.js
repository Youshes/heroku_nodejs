// Models

const Product = require('../../Models/Product');
const Category = require('../../Models/Category');


exports.getIndexController = (req,res) =>{
    Product.findAll({include : "Category"}).then(product=>{
        res.render('index',{'product':product});
    })
}