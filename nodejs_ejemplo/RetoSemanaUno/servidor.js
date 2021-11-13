const express = require('express');
const mongoose = require('mongoose');
const ofertaLaboral = require('./Modelo/OfertaLaboral.js');

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexión a la base de datos

mongoose.connect('mongodb+srv://misiontic:misiontic@projectonodejs.wfaab.mongodb.net/MiPrimeraBaseDeDatosMongoDB?retryWrites=true&w=majority');

// operaciones CRUD

router.get('/', (req, res) => {
    res.send('Inscripción a oferta laboral')
});

router.get('/ofertalaboral', (req, res) => {
    ofertaLaboral.find(function(err, datos){
        if(err){
            console.log('Error leyendo los datos')
        }else{
            res.send(datos);
        }
    })    
});

router.post('/ofertalaboral', (req, res) => {
    let nuevaOfertaLaboral = new ofertaLaboral({
        tipoDocumento: req.body.tipoDocumento,
        documento: req.body.documento,
        nombre: req.body.nombres,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        email: req.body.email,
        telefeno: req.body.telefeno,
        celular: req.body.celular,
        website: req.body.website,
        descripcion: req.body.descripcion
    });

    nuevaOfertaLaboral.save(function(err, datos){
        if(err){
            console.log(err);
        }else{
            res.send('Postulante almacenado')
        }
    })
});

// Conexión al servidor

app.use(router);
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});