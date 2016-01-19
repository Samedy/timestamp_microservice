var express = require('express');
var app = express();
var fs = require("fs");

function convertUnixTimeToDate(unix_timestamp){
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

app.get('/:date', function (req, res) {
    var str =req.params.date;
    var users = JSON.parse( "" );
    //check date with regex
    var dateReg = /d(b+)d/g;
    if (str.match)
    res.end(str);
})

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})