const mongoose = require('mongoose');

let postulanteSchema = new mongoose.Schema({
    tipoDocumento: String,
    documento: String,
    nombre: String,
    apellido: String,
    direccion: String,
    email: String,
    telefeno: String,
    celular: String,
    website: String,
    descripcion: String
});

module.exports = mongoose.model('postulante', postulanteSchema, 'InscripcionOfertaLaboral');