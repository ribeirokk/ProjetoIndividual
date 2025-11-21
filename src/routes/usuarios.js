var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res); // Linha 8
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/soldadosImperiais", function (req, res) {
    usuarioController.soldadosImperiais(req, res);
});

router.post("/soldadosStormcloaks", function (req, res) {
    usuarioController.soldadosStormcloaks(req, res);
});

router.post("/classeMaisUsada", function (req, res) {
    usuarioController.classeMaisUsada(req, res);
});

router.post("/magiaMaisUsada", function (req, res) {
    usuarioController.magiaMaisUsada(req, res);
});

router.post("/racaPredominante", function (req, res) {
    usuarioController.racaPredominante(req, res);
});


module.exports = router;