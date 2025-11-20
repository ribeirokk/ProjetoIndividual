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
}

module.exports = {
    registrar
};
