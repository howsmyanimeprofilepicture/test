var express = require('express');
var router = express.Router();




router
    .get('/', function (req, res, next) {
        console.log('ㅎㅇ')
        res.send({msg: "이건 경고임"})
    })
    .post('/', (req, res) => {
        console.log(req.body);
        res.send({msg: req.body.msg});
   
    });

module.exports = router;
