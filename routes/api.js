const express = require('express');
const router = express.Router();

const cmsRouter = require('./v1/cms');
const articlesRouter = require('./v1/articles');

router.use('/cms', cmsRouter);
router.use('/articles', articlesRouter);



module.exports = router;