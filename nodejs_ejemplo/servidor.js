const express = require('express');
const mongoose = require('mongoose');
const tareaSchema = require('./Modelo/Tarea.js')

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexión a la base de datos
mongoose.connect('mongodb+srv://misiontic:misiontic@projectonodejs.wfaab.mongodb.net/MiPrimeraBaseDeDatosMongoDB?retryWrites=true&w=majority');

// Operaciones CRUD

router.get('/', (req, res) => {
    res.send('El inicio de mi API')
});

router.get('/tarea', (req, res) => {
    tareaSchema.find(function(err, datos){
        if(err){
            console.log('Error leyendo las tareas')
        }else{
            res.send(datos);
        }
    })
})

router.post('/tarea', (req, res) => {
    let nuevaTarea = new tareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });

    nuevaTarea.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send('Tarea almacenada correctamente.')
    })   
});
// Conexión al servidor

app.use(router);
app.listen(3000, () => {
   console.log('Servidor corriendo en el puerto 3000')
});