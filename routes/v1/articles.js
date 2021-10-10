const express = require('express');
const router = express.Router();
const config = require('config');


router.get('/', (req, res, next) => {
    res.json({
        data: [],
        success: true
    })
});


module.exports = router;