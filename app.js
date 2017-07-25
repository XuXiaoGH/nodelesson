var express = require('express');
var utility = require('utility');

var app = express();


//lesson 2
/* app.get('/', (req,res)=>{

    var q = req.query.q;
    let md5Value = utility.md5(q);
    res.send(md5Value);
}); */

app.get('/', (req, res)=>{
    
});


app.listen(3000, (req, res)=>{
    console.log('app is runing at port 3000');
});