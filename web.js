  var gzippo = require('gzippo');
  var express = require('express');
  var app = express();

  // app.use(express.logger('dev'));
  app.use(express.static(__dirname + "/dist"));
  var server = app.listen(process.env.PORT || 5000);
    var host = server.address().address;
  var port = server.address().port;


   app.get('/hola', function(request, response) {
     response.send('Escuchando desde http://'+host+':'+port);
    });

  console.log('Escuchando desde http://%s:%s', host, port);
