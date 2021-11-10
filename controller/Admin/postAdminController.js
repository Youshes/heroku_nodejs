// Database

const db = require('../../utility/database');

// Models

const Category = require('../../Models/Category');
const Product = require('../../Models/Product');

exports.postAdminCategoryController = (req,res) => {
    const name = req.body.name;
    const category = Category.build({
        name : name
    })
    category.save().then(()=>res.redirect('/admin'));
}
exports.postAdminProductController = (req,res) => {
    const title = req.body.title;
    const image = req.body.image;
    const description = req.body.description;
    const price = req.body.price;
    const category = req.body.category;
    Category.findAll({where : {name : category}}).then(cat=>{
        const product = Product.build({
            title : title,
            image : image,
            description : description,
            price : price,
            CategoryId : cat[0].id
        })
        product.save().then(()=>{
            res.redirect('/admin');
        })
    })

   
}