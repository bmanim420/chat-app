var app = require('express')();
var http = require('http');
var server = http.Server(app);
var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});
/*
http.listen(3000, function(){
  console.log('listening on *:3000');
}); */
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });
  