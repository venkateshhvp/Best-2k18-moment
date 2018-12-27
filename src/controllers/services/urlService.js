var express = require('express');
var User  = require('../../models/user');
const uid = require('uuid/v1');

exports.generateURL =  (req,res)=>{

    var id = uid();
   


       var user = new User({
        _id: id,
        userId: id,
        name: req.body.name
         });
user.save((err)=>{
    if(err){
        console.log(err);
        res.send({
            status: 'fail',
            data: {}
          });
    }
    else {
        var url = "tellaboutme/#/share/"+id;
        res.send({
        status: 'success',
        code: 200,
        data: {url:url}
    });
    }
})
}