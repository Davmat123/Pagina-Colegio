 const express = require("express");

 const app = express();

app.set("view engine", "ejs");

 app.listen(35560, function(){
        console.log("Servidor creado miguelsamper.up.railway.app");
 });