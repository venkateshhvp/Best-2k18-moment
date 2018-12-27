var express = require('express');
var router = express.Router();

var shareService = require('./services/shareService');

router.post('/sharemessage', function (req, res) {
shareService.feedback(req,res);
})

router.post('/updatesharemessage', function (req, res) {
    shareService.updateFeedback(req,res);
    })

    router.post('/getname', function (req, res) {
        shareService.getName(req,res);
        })

        router.post('/dashboard', function (req, res) {
            shareService.dashboard(req,res);
            })
module.exports = router;