var express=require('express');
var app=express();
var mongoose= require('mongoose');
var bodyparse= require('body-parser');
var session=require('express-session');
var MongoStore=require('connect-mongo')(session);
var cors=require('cors');

app.use(cors());
mongoose.connect('mongodb://localhost/users');

var Users= mongoose.model('Users',{
   name: 'String',
   password: 'String',
   email: 'String'
 });

 global.Users = Users;

 app.use(bodyparse.json({type:'application/json'}));


app.use(session({
    secret:'tiest9383D830d',
    resave:true,
    saveUninitialized:true,
    store:new MongoStore({mongooseConnection:mongoose.connection})
   }));

var blogconroller=require('./user');
app.use('/user',blogconroller);


app.listen(8001);


   

module.exports=app;
