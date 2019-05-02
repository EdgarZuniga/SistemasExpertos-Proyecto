var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        nombre : String,
        descripcion : String,
        tipo : mongoose.Schema.Types.Mixed      
        
    }
);

module.exports = mongoose.model('documentos',esquema);