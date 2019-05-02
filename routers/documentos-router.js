var express = require("express");
var router = express.Router();
var documento = require("../models/documento");

//Obtener el listado de todas las peliculas
router.get("/",function(req,res){
    documento.find()
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

//Obtener una pelicula en particular
router.get("/:id",function(req,res){
    documento.find({_id:req.params.id})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});


module.exports = router;