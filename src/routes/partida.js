var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");

router.post("/registrar", function(req, res) {
    partidaController.registrar(req, res);
});

router.get("/obterClasse", function(req, res) {
    partidaController.obterClasse(req, res);
});

router.get("/obterRaca", function(req, res) {
    partidaController.obterRaca(req, res);
});

router.get("/obterFaccao", function(req, res) {
    partidaController.obterFaccao(req, res);
});

router.get("/obterDadosGrafico/:fkUsuario", function(req, res) {
    partidaController.obterDadosGrafico(req, res);
});

router.get("/partidasJogadas/:fkUsuario", function(req, res) {
    partidaController.partidasJogadas(req, res);
});

router.get("/partidasGanhas/:fkUsuario", function(req, res) {
    partidaController.partidasGanhas(req, res);
});

router.get("/partidasPerdidas/:fkUsuario", function(req, res) {
    partidaController.partidasPerdidas(req, res);
});

router.get("/aproveitamento/:fkUsuario", function(req, res) {
    partidaController.aproveitamento(req, res);
});

router.get("/vitoriasDerrotas/:fkUsuario", function (req, res) {
    partidaController.vitoriasDerrotas(req, res);
});
module.exports = router;
