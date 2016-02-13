/**
 * Created by apple on 2/13/16.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/',function(req,res){
    res.send('Tdo API Root');
});

app.listen(PORT,function(){
    console.log('express listening on port' + PORT +'!' );
});