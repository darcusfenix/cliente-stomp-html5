var express = require ("express");

var app = express(),
    port = 3010;



app.use(express.static("public"));



app.listen(port,  function (err) {

    if (err) {

        console.log(err);

    } else {

        let message = "SE INICIÓ EL SERVIDOR EN EL PUERTO: " + port;
    
        console.log(message);

    }

});

