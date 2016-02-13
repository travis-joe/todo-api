/**
 * Created by apple on 2/13/16.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;
var bodyParser = require('body-parser');
var _ =require('underscore');


app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('Tdo API Root');
});

//GET  /TODOS
app.get('/todos',function(req,res){
   res.json(todos);
});

app.get('/todos/:id',function(req,res){
    var todoId = parseInt(req.params.id,10);
    var matchedTodo = _.findWhere(todos,{id:todoId});



    if(matchedTodo){
        res.json(matchedTodo);
    }else{
        res.status(404).send();
    }
});

//POST
app.post('/todos',function(req,res){
    var body = _.pick( req.body,'description','completed') ;
    if(!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0 ){
        return res.status(400);
    }
    body.description = body.description.trim();
    body.id = todoNextId++;
    todos.push(body);
    console.log('description: '+body.description);

    res.json(body);
});

app.listen(PORT,function(){
    console.log('express listening on port' + PORT +'!' );
});