var partidaModel = require('../models/partidaModel');

function iniciarPartida(req, res) {
    var idUsuario = req.body.idUsuario;

    if (idUsuario == undefined) {
        return res.status(400).send("idUsuario está undefined!");
    }

    partidaModel.iniciarPartida(idUsuario)
        .then((resultado) => {
            res.status(201).json({
                message: 'Partida iniciada com sucesso!',
                idPartida: resultado.insertId
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Erro ao iniciar partida.' });
        });
}

function registrarTentativa(req, res) {
    var idPartida = req.body.idPartida;
    var tentativaNumero = req.body.tentativaNumero;

    if (idPartida == undefined) {
        return res.status(400).send("idPartida está undefined!");
    }
    if (tentativaNumero == undefined) { // CORRIGIDO
        return res.status(400).send("tentativaNumero está undefined!");
    }

    partidaModel.registrarTentativa(idPartida, tentativaNumero)
        .then(() => {
            res.status(201).json({
                message: "Tentativa registrada com sucesso!"
            });
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function finalizarPartida(req, res) {
    var idPartida = req.body.idPartida;
    var venceu = req.body.venceu;

    if (idPartida == undefined) {
        return res.status(400).send("idPartida está undefined!");
    }

    if (venceu == undefined) {
        return res.status(400).send("venceu está undefined!");
    }

    // converter string para boolean
    venceu = venceu === true || venceu === "true";

    partidaModel.finalizarPartida(idPartida, venceu)
        .then(() => {

            let mensagem = venceu ? "Vitória registrada" : "Derrota registrada";

            res.status(200).json({
                message: mensagem
            });
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function atualizarStatsVitoria(req, res) {
    var idUsuario = req.body.idUsuario;

    if (idUsuario == undefined) {
        return res.status(400).send("idUsuario está undefined!");
    }

    partidaModel.atualizarStatsVitoria(idUsuario)
        .then(() => {
            res.status(200).json({
                message: "Status de vitória atualizado"
            });
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function atualizarStatsDerrota(req, res) {
    var idUsuario = req.body.idUsuario;

    if (idUsuario == undefined) {
        return res.status(400).send("idUsuario está undefined!");
    }

    partidaModel.atualizarStatsDerrota(idUsuario)
        .then(() => {
            res.status(200).json({
                message: "Status de derrota atualizado"
            });
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    iniciarPartida,
    registrarTentativa,
    finalizarPartida,
    atualizarStatsVitoria,
    atualizarStatsDerrota
};
