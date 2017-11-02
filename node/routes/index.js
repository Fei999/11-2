var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  port:3307
});
/* GET home page. */
router.post('/con', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var tit=req.body.tit;
    var time=req.body.time;
    var con=req.body.con;
    var op=req.body.op;
    connection.query('INSERT INTO body.uid (uid,title,time,content) VALUES ("'+op+'","'+tit+'","'+time+'","'+con+'")', function(err, rows, fields) { 
        res.send(rows)
    });
});

router.post('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var op=req.body.op;
    connection.query('SELECT * FROM body.uid WHERE uid='+op, function(err, rows, fields) { 
        res.send(rows)
    });
});
module.exports = router;
