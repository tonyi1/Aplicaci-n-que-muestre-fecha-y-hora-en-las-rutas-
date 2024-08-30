 const ruta= require("express").Router(); //Contiene las rutas
const mensaje = require("../middleware/fecha y hora");
const fecha_Y_hora=require("../middleware/fecha y hora");

ruta.get("/ruta1",fecha_Y_hora,(req,res)=>{
res.send("Esta es la ruta 1");
})

ruta.get("/ruta2",mensaje.mensaje,(req,res)=>{
    res.send("Esta es la ruta2")
})

module.exports=ruta;