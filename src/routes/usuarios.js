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

router.get("/soldadosImperiais", function (req, res) {
    usuarioController.soldadosImperiais(req, res);
});

router.get("/soldadosStormcloaks", function (req, res) {
    usuarioController.soldadosStormcloaks(req, res);
});

router.get("/classeMaisUsada", function (req, res) {
    usuarioController.classeMaisUsada(req, res);
});

router.get("/magiaMaisUsada", function (req, res) {
    usuarioController.magiaMaisUsada(req, res);
});

router.get("/racaPredominante", function (req, res) {
    usuarioController.racaPredominante(req, res);
});


module.exports = router;