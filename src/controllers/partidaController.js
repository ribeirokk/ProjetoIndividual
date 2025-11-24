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

function obterDadosGrafico(req, res) {
    var fkUsuario = req.params.fkUsuario;
    console.log(fkUsuario)
        partidaModel.obterDadosGrafico(fkUsuario)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados do grafico dos cria: ${resultado}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                    
                    res.json(resultado);
                    
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um ERRO: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function partidasJogadas(req, res) {
    var fkUsuario = req.params.fkUsuario;

    partidaModel.partidasJogadas(fkUsuario)
        .then(resultado => res.json(resultado[0]))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function partidasGanhas(req, res) {
    var fkUsuario = req.params.fkUsuario;

    partidaModel.partidasGanhas(fkUsuario)
        .then(resultado => res.json(resultado[0]))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}


function partidasPerdidas(req, res) {
    var fkUsuario = req.params.fkUsuario;

    partidaModel.partidasPerdidas(fkUsuario)
        .then(resultado => res.json(resultado[0]))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function aproveitamento(req, res) {
    var fkUsuario = req.params.fkUsuario;

    partidaModel.aproveitamento(fkUsuario)
        .then(resultado => res.json(resultado[0]))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function vitoriasDerrotas(req, res) {
    var idUsuario = req.params.idUsuario;

    partidaModel.vitoriasDerrotas(idUsuario)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(200).json({ vitorias: 0, derrotas: 0 });
            }
        })
        .catch(erro => {
            console.log("Erro ao buscar vitórias e derrotas:", erro);
            res.status(500).json(erro);
        });
}
module.exports = {
    registrar,
    obterClasse,
    obterRaca,
    obterFaccao,
    obterDadosGrafico,
    partidasJogadas,
    partidasGanhas,
    partidasPerdidas,
    aproveitamento,
    vitoriasDerrotas
};
