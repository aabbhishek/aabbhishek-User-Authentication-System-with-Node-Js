var express = require('express');
const bodyParser = require('body-parser');

ObjectID = require('mongodb').ObjectID;
var urlencoderParser = bodyParser.urlencoded({extended:false});
var MongoClient = require('mongodb').MongoClient; // mongo Connection
var url="USE YOUR OWN STRING HERE"; //connection string
var waterfall = require('async-waterfall');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var app=express();
app.use(bodyParser.json());
app.use(cors());

app.use(cookieParser());

app.use(session({
  cookie: {
    path    : '/',
    httpOnly: false,
    maxAge  : 24*60*60*1000
  },
  secret: '1234567890QWERT'
}));

var email;

app.get('/',function (req,res) {
    res.send('<center><h2>Server is Active <br/></h2></center>');
});

app.post('/getLogin',urlencoderParser,function (req,res) {
  console.log("User Requsted Login");


MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db){//collection
  if (err) throw err;
  var dbo = db.db("abc_crop"); //database name

  dbo.collection("user_data").findOne({email:req.body.email , password:req.body.password} ,function(err,result) {

    if(result){
      email=req.body.email;
      res.status(200).send(true);

    }
    else{
      res.status(200).send(false);
    }

  });
  db.close();
});

});



  app.get('/getSessionStatus',function (req,res) {
    console.log('session-sessionChecker');

    console.log(email);
    if(email){
      res.send({'status':true,'email':email});
      email=null;
    }else{
      res.send({'status':false});
    }
  });


app.post('/getRegister',urlencoderParser,function(req,res){
  console.log("User Requsted REG");


  var user_info = req.body; //geting post Data

  MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {//collection
    if (err) throw err;
    var dbo = db.db("abc_crop"); //database name
    dbo.collection("user_data").insertOne(user_info,function(err,resp) {
        if(resp){
        res.send(true);
      }
      else{
        res.send(false);
      }
      db.close();

    });

  });



});


app.get('/callData',urlencoderParser,function(req,res){
  console.log("CALL DATA");

  MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db){//collection
   if (err) throw err;
   var dbo = db.db("abc_crop"); //database name
   dbo.collection("call_data").find({}).toArray(function(err,result) {
       if (err) throw err;
      res.send(result);


       db.close();
     });

   });

});

  app.post('/calldatadelrow',urlencoderParser,function (req,res) {

    MongoClient.connect(url, { useNewUrlParser: true } , function(err,db){
     var dbo = db.db("abc_crop"); //database name
     var mongo = require('mongodb');
     var id = new mongo.ObjectID(req.body._id);
     var myquery = {_id: id};
     dbo.collection("call_data").deleteOne(myquery,function(req,result) {
         if(err){console.error(err);}
         if(result){res.send(true);}
         else{res.send(false);}
     });
     db.close();
    });



  });

  app.get('/getCourseList',function (req,res) {

    console.log("Course DATA");

    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db){//collection
     if (err) throw err;
     var dbo = db.db("abc_crop"); //database name
     dbo.collection("course_list").find({}).toArray(function(err,result) {
         if (err) throw err;
        res.send(result);
         db.close();
       });

     });
  });


  app.post('/postUpdateData',urlencoderParser,function(req,res) {

    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db){//connection

      var dbo = db.db("abc_crop"); //database name
      var mongo = require('mongodb');
      var id = new mongo.ObjectID(req.body.id );

      // var id = "ObjectId(" +req.body.idMain +")";
      var myquery = {_id: id};
      var newvalues = {$set: {course_desc:req.body.courseDesc} };

      dbo.collection('course_list').updateOne(myquery,newvalues,function(err,result) {
        if(err){  console.error(err);}
        if(result){
          res.send(true);
        }else{
          res.send(false);
        }
        db.close();
      });
    });

  });



app.listen(3000);
