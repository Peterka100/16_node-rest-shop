const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const ordertRoutes = require('./API/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/products', productRoutes);
app.use('/orders', ordertRoutes);

app.use(function (req, res, next) {
   const error = new Error('Not found');
   error.status = 404;
   next(error);
});

/*
// CORS - nedokončene
------------------------------------------------------------------------------------
app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin'),
   res.header('Access-Control-Allow-Header')
});
*/


app.use(function (error, req, res, next) {
   res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;