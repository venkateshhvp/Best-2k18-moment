var express = require('express');
var Share = require('../../models/share');
var User = require('../../models/user');
exports.feedback = (req,res)=>{
    var share = new Share({
        _id: req.body.id,
        userId: req.body.id,
        name: req.body.name,
        from: req.body.from,
        fromId: req.body.fromId,
        message: req.body.message
    });
share.save((err)=>{
    if(err){
        console.log(err);
        res.send({
            status: 'fail',
            data: {}
          });
    }
    else {
        res.send({
        status: 'success',
        code: 200,
        data: {}
    });
    }
})

}

exports.updateFeedback = (req,res)=>{
    Share.updateOne({fromId: req.body.fromId},{$set:{from:req.body.from}}).then((data,err)=>{
        if(err){
            console.log(err)
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else{
            res.send({
                status: 'success',
                code: 200,
                data: {}
              });
        }
    });
    }

    exports.getName = (req,res)=>{
        User.findOne({userId: req.body.id},(err,data)=>{
            
        if(err){
            console.log(err)
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else{
            res.send({
                status: 'success',
                code: 200,
                data: data.name
              });
        }
        });
    }

exports.dashboard = (req,res)=>{
    Share.find({userId: req.body.id},(err,data)=>{
        if(err){
            console.log(err)
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else{
            res.send({
                status: 'success',
                code: 200,
                data: data
              });
        }
    });
}