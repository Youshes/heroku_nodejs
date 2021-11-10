const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','pug');
app.set('views','./view');


// Databse 

const db = require('./utility/database');

// Models

const Product = require('./Models/Product')
const Category = require('./Models/Category')


// Routes

const shopRoute = require('./routes/Shop/getShopRoute');

app.use('/',shopRoute.getIndexRoute);

// Admin Route 


const getAdminRoute = require('./routes/Admin/getAdminRoute');
const postAdminRoute = require('./routes/Admin/postAdminRoute');

app.use('/admin',getAdminRoute.getAdminIndexRoute);
app.use('/admin',postAdminRoute.postAdminRoute);



Product.belongsTo(Category)


db.sync({force : false});


app.listen(process.env.PORT);