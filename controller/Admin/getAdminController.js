// Models

const Category = require('../../Models/Category');
const Product = require('../../Models/Product');

exports.getAdminIndexController = (req,res) => {
    Category.findAll().then(categories=>{
        Product.findAll({include : 'Category'}).then(prd=>{
           res.render('admin-index',{
                'categories':categories,
                'products' : prd
            }) 
            console.log(prd);
        })
      
    })
}
exports.getAdminCategoryController = (req,res) => {
    res.render('admin-insert-category')
}
exports.getAdminProductController = (req,res) => {
    Category.findAll().then(categories=>{
        res.render('admin-insert-product',{
            'categories':categories
        })
    })
  
}