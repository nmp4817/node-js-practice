// console.log('hey ninjas');
//
// setTimeout(function() {
//   console.log("3 seconds have passed");
// },3000);
//
// var time = 0;
//
// var timer = setInterval(function() {
//   time += 2;
//   console.log(time + " seconds have passed");
//   if (time > 5) {
//     clearInterval(timer);
//   }
// },2000);

// console.log(__dirname);
// console.log(__filename);

// //normal function statement
// function sayHi() {
//   console.log("Hi");
// }
//
// sayHi();

// //calling function from another function
// function callFunction(fun) {
//   fun();
// }
//
//
// //function expression
// var sayBye = function() {
//   console.log("Bye");
// };
//
// callFunction(sayBye);

// //user defined module
// var counter = require('./count');
//
// console.log(counter(['A','B','C']));

// var stuff = require('./stuff');
//
// console.log(stuff.counter(['A','B','C']));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi,5));

// //Built in module
// var events = require('events');

//jQuery
//element.on('click', function() {})

//node.js
// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent',function(mssg) {
//   console.log(mssg);
// });
//
// myEmitter.emit('someEvent','The event was emitted');

// //inheriting another module using util module
// var util = require('util');
//
// var Person = function(name) {
//   this.name = name;
// };
//
// util.inherits(Person,events.EventEmitter);
//
// var nabil = new Person("Nabil");
// var ayub = new Person("Ayub");
// var huzaifa = new Person("Huzaifa");
//
// var people = [nabil,ayub,huzaifa];
//
// people.forEach(function(person) {
//   person.on('speak',function(mssg) {
//     console.log(person.name + ' said: ' + mssg);
//   });
// });
//
// nabil.emit('speak','hey dudes');
// ayub.emit('speak','i am hungry');

//
// //reading and writing files
// var fs = require('fs');

// //blocking code
// var readme = fs.readFileSync('README.md','utf8');
//console.log(readme);
// fs.writeFileSync('WRITEME.MD',readme);

// //non-blocking code (async)
// fs.readFile('README.md','utf8',function(err,data) {
//   // console.log(data);
//   fs.writeFile('WRITEME.MD',data,function(err) {
//     console.log('done!');
//   });
// });

// fs.unlink('WRITEME.md',function(err) {
//   console.log(err);
// });
// console.log('test');

//Creating and removing directories

//blocking code
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// //none blocking code (async)
// fs.mkdir('stuff',function() {
//   fs.readFile('README.md','utf8',function(err,data) {
//     fs.writeFile('./stuff/WRITEME.md',data,function(err) {
//       console.log(err);
//     });
//   });
// });

// fs.unlink('./stuff/WRITEME.md',function() {
//   fs.rmdir('stuff');
// });


// //creating server
// var http = require('http');

// var server = http.createServer(function(req,res) {
//   console.log('Request was made: ' + req.url);
//   res.writeHead(200,{'Content-Type':'text/plain'});
//   res.end('Hey Guys!');
// });
//
// server.listen(3000,'127.0.0.1');
// console.log('Now listing to port 3000');

// //streams and buffers
// var fs = require('fs');
//
// var readStream = fs.createReadStream(__dirname + '/README.md','utf8');
// var writeStream = fs.createWriteStream(__dirname + '/WRITEME.md','utf8');
//
// readStream.on('data',function(chunk) {
//   console.log('New Chunk Received:');
//   // console.log(chunk);
//   writeStream.write(chunk);
// });

// //PIPES and Serving HTML Pages
// var http = require('http');
// var fs = require('fs');
//
// // var readStream = fs.createReadStream(__dirname + '/README.md','utf8');
// // var writeStream = fs.createWriteStream(__dirname + '/WRITEME.md','utf8');
// //
// // readStream.pipe(writeStream);
//
// var server = http.createServer(function(req,res) {
//   console.log('Request was made: ' + req.url);
//   res.writeHead(200,{'Content-Type':'text/html'});
//   var readStream = fs.createReadStream(__dirname + '/index.html','utf8');
//   readStream.pipe(res);
// });
//
// server.listen(3000,'127.0.0.1');
// console.log('Now listing to port 3000');


// //Serving JSON to data
// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req,res) {
//   console.log('Request was made: ' + req.url);
//   res.writeHead(200,{'Content-Type':'application/json'});
//   var myObj = {
//     name: "Nabil",
//     job: "Chilling",
//     age: 24
//   };
//   res.end(JSON.stringify(myObj));
// });
//
// server.listen(3000,'127.0.0.1');
// console.log('Now listing to port 3000');


// //Basic Routing
// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req,res) {
//   console.log('Request was made: ' + req.url);
//   if (req.url === '/home' || req.url === '/') {
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
//   } else if (req.url === '/contact') {
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/contact.html').pipe(res);
//   } else if (req.url === '/api/cr7') {
//     var cr7 = [{
//         name: "Nabil",
//         job: "Chilling",
//         age: 24
//       },
//       {
//           name: "Ayub",
//           job: "Watching",
//           age: 24
//       }];
//     res.writeHead(200,{'Content-Type': 'application/json'});
//     res.end(JSON.stringify(cr7));
//   } else {
//     res.writeHead(404,{'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(res);
//   }
// });
//
// server.listen(3000,'127.0.0.1');
// console.log('Now listing to port 3000');

//EXPRESS {routing, template engine, serving static files(middleware) }
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
// app.use('/assets',function(req, res, next) {
//   console.log(req.url);
//   next();
// });
app.use('/assets',express.static('assets'));

app.get('/',function(req, res) {
  // res.send('This is the homepage');
  // res.sendFile(__dirname + '/index.html');
  res.render('index');
});

app.post('/contact', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.render('contact-success',{data: req.body});
})

app.get('/contact',function(req, res) {
  // res.send('This is the contactpage');
  // res.sendFile(__dirname + '/contact.html');
  // console.log(req.query);
  res.render('contact',{qs: req.query}); // query string
});

app.get('/profile/:id', function(req, res) {
  //res.send('You requested to see a profile with id of ' + req.params.id);
  var data = {
    name: 'Nabil',
    age: 24,
    job: 'Chilling',
    hobbies: ['eating','sleeping','playing']
  };
  res.render('profile',{person: req.params.id, data: data});
});
app.listen(3000);
