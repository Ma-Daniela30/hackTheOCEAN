const express = require("express");

const app=express();

const port=3000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"//views//index.html");
});

app.get('/quienes_somos',(req,res)=>{
    res.sendFile(__dirname+"//views//quienes_somos.html");
});

app.get('/plasticos_mar',(req,res)=>{
    res.sendFile(__dirname+"//views//plasticos_mar.html");
});
app.get('/que_hacemos',(req,res)=>{
    res.sendFile(__dirname+"//views//que_hacemos.html");
});
app.get('/solicitud',(req,res)=>{
    res.sendFile(__dirname+"//views//solicitud.html");
});

app.listen(port,()=>{
    console.log(`Ejecutando en el puerto ${port}`);
});