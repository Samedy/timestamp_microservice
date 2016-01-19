var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
   res.end("success");
})

app.get('/:date', function (req, res) {
   var str =req.params.date;
   res.end(str);
})

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})