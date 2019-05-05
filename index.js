var express = require("express");
var bodyParser = require("body-parser");
var database = require("./modules/database");
var documentosRouter = require('./routers/documentos-router');
var tiposRouter = require('./routers/tipos-router');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/documentos",documentosRouter);
app.use("/tipos",tiposRouter);
app.use(express.static("public"));

app.listen(3337,function(){
    console.log("Servidor en linea");
});

