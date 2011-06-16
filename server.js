var express = require('./lib/express');
var connect = require('./lib/connect');
var sys = require('sys');
var http = require('http');

require.paths.push(__dirname + '/lib');

var app = express.createServer();
app.use(connect.staticProvider(__dirname + "/public"))
app.use(connect.cookieDecoder());
app.use(connect.session());

app.set('views', __dirname + '/views');

app.dynamicHelpers({
    session: function(req, res){
        return req.session;
    }
});

app.get('/', function(req, res){
  res.render("index.ejs")  
});

//8.19.40.72/leaders

app.get('/jsupdate/:id?', function(request, response){
  response.writeHead(200, {'Content-Type': 'text/javascript'});
    
  response.write( {} );
  response.end();  

});

app.listen(Number(process.env.PORT) || 8001);
console.log("Runnint on 8001");