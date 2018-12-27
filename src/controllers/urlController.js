
var express = require('express');
var router = express.Router();
var urlService = require('./services/urlService');

router.post('/generateurl', function (req, res) {
urlService.generateURL(req,res);
})



module.exports = router;