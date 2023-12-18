const express = require('express');
const app = express();

let mensagemDoDia = require('./mesagemDoDia');

let data = new Date();

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornaMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});
});

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
})