const express = require('express');
const app = express();
const multer = require('multer')
const path = require('path')
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));

app.use(express.json());


app.use('/', require('./router'));
app.use(express.static('./views'));

app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
});