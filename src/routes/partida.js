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

module.exports = router;
