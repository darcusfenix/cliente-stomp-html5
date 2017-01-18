var express = require ("express");

var app = express(),
    port = 3010;


/*
app.use(express.static("public"));


app.listen(port,  function (err) {

    if (err) {

        console.log(err);

    } else {

        var message = "SE INICIÓ EL SERVIDOR EN EL PUERTO: " + port;
    
        console.log(message);

    }

});

*/

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://activemq3870.cloudapp.net')
 
client.on('connect', function () {
  client.subscribe('mqtt/demo')
  client.publish('mqtt/demo', 'holaaaaa')
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
//  client.end()
})
