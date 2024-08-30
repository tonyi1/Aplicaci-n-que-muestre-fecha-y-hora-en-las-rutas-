const fechaHr =(req,res,next)=>{
    const fecha_Y_hora=new Date().toLocaleString();
    console.log(`[${fecha_Y_hora}$]`);
    next();
}
const mensaje=(req,res,next)=>{
    console.log("TANGAMANDAPIO");
    next();
}
module.exports=fechaHr;
module.exports.mensaje=mensaje;