//Invocamos a la conexion de la DB
const { name } = require('ejs');
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const name = req.body.name;
    const rol = req.body.rol;
    conexion.query('INSERT INTO contacts SET ?',{name:name, rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const rol = req.body.rol;
    conexion.query('UPDATE contacts SET ? WHERE id = ?',[{name:name, rol:rol}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};