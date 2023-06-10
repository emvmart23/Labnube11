
const { name } = require('ejs');
const conexion = require('../database/db');

exports.save = (req, res)=>{
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const correo = req.body.correo;
    const fecha_nac = req.body.fecha_nac;
    const imagen = req.body.imagen;
    conexion.query('INSERT INTO users SET ?',{nombre:nombre, apellidos:apellidos,correo:correo,fecha_nac, imagen:imagen}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
               
            res.redirect('/');         
        }
});
};

exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const correo = req.body.correo;
    const fecha_nac = req.body.fecha_nac;
    const imagen = req.body.imagen;
    conexion.query('UPDATE users SET ? WHERE id = ?',[{nombre:nombre, apellidos:apellidos,correo:correo,fecha_nac, imagen:imagen}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};