const express = require('express');
const app = express();
const funcaoIMC = require('./calculo')

app.get('/',(req,res)=>{
    if(funcaoIMC.validaParametros(req.query.peso) && funcaoIMC.validaParametros(req.query.altura)){
    let peso = req.query.peso
    let altura = req.query.altura
    let imc = funcaoIMC.calcularIMC(peso,altura)
    let status = funcaoIMC.statusIMC(imc)

    res.json({imc: imc, status: status})
    }else{
    res.status(400).json({erro: 'Dados inválidos'})
    }
})

app.listen(3000,() =>{
    console.log('Servidor iniciado')
})