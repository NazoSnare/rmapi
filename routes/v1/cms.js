const express = require('express');
const router = express.Router();
const config = require('config');

const mockData = [{
        id: 'X1JAfdsZxy89',
        component: 'TopBar',
        alias: 't'
    },
    {
        id: 'X1JAfdxe3sZxy',
        component: 'Divider',
        alias: 'd'
    },
    {
        id: 'X1JAfwwwedsZxy',
        component: 'BannerSection',
        alias: 'b'
    },
    {
        id: 'X1JAfiuydsZxy',
        component: 'FloatingSection',
        alias: 'f'
    },
    {
        id: 'X1JAfxxxxdsZxy',
        component: 'ArticlesSection',
        alias: 'a'
    },
    {
        id: 'X1JAfdsZ8777xy',
        component: 'EditionsSection',
        alias: 'e'
    }
];

router.get('/', async(req, res, next) => {
    const order = req.query.order;

    const cmsMock = reOrder(order, mockData);
    res.status(200).json({
        success: true,
        data: cmsMock,
        params: req.params
    });
});

/**
 * calculate and return letters
 * @param {*} lettersOfOrders 
 */
const reOrder = (lettersOfOrders, orderData) => {
    if (lettersOfOrders) {
        //sort orderData by starting character
        const lettersOfOrdersArray = lettersOfOrders.split('');
        const mockDataOrderedArray = lettersOfOrdersArray.map(val => orderData.find(current => current.alias === val));
        return mockDataOrderedArray
    } else {
        return orderData;
    }
}




module.exports = router;