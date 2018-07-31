const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
   res.status(200).json({
       message: 'Handling GET to /products'
   });
});

router.post('/', function (req, res, next) {
    const product = {
      name: req.body.name,
      price: req.body.price
    };
    res.status(201).json({
        message: 'Handling POST to /products',
        createdProduct: product
    });
});

router.get('/:productId', function (req, res, next) {
    const id = req.params.productId;
    if(id === 'special') {
        res.status(200).json({
            message: 'You discovered special ID',
            id: id
        })
    } else
        res.status(200).json({
            message: 'You passed an ID'
        })
});


router.patch('/:productId', function (req, res, next) {
   res.status(200).json({
       message: 'Udpdated product'
   });
});

router.delete('/:productId', function (req, res, next) {
    res.status(200).json({
        message: 'Deleted product'
    });
});

module.exports = router;