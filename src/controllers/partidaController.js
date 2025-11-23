var partidaModel = require("../models/partidaModel");

function registrar(req, res) {
    var idUsuario = req.body.idUsuario;
    var tentativas = req.body.tentativas;
    var venceu = req.body.venceu;


    partidaModel.registrar(idUsuario, tentativas, venceu)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
};

function obterClasse(req, res) {
    partidaModel.obterClasse()
    .then(function (resultadoObterClasse) {
        console.log(`\nResultados encontrados: ${resultadoObterClasse.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoObterClasse)}`);
        res.json(resultadoObterClasse);
        
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
};

function obterRaca(req, res) {
    partidaModel.obterRaca()
    .then(function (resultadoObterRaca) {
        console.log(`\nResultados encontrados: ${resultadoObterRaca.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoObterRaca)}`);
        res.json(resultadoObterRaca);
        
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
};

function obterFaccao(req, res) {
    partidaModel.obterFaccao()
    .then(function (resultadoObterFaccao) {
        console.log(`\nResultados encontrados: ${resultadoObterFaccao.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoObterFaccao)}`);
        res.json(resultadoObterFaccao);
        
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
};


module.exports = {
    registrar,
    obterClasse,
    obterRaca,
    obterFaccao,
};
