  var gzippo = require('gzippo');
  var express = require('express');
  var app = express();

  // app.use(express.logger('dev'));
  app.use(express.static(__dirname + "/dist"));
  var server = app.listen(process.env.PORT || 5000);
    var host = server.address().address;
  var port = server.address().port;

  console.log('Escuchando desde http://%s:%s', host, port);
