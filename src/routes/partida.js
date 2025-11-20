// src/routes/partida.js
var express = require("express");
var router = express.Router();
var partidaController = require("../controllers/partidaController");

// Rotas de partidas
router.post("/iniciar", partidaController.iniciarPartida);
router.post("/tentativa", partidaController.registrarTentativa);
router.post("/finalizar", partidaController.finalizarPartida);
router.post("/stats/vitoria", partidaController.atualizarStatsVitoria);
router.post("/stats/derrota", partidaController.atualizarStatsDerrota);

module.exports = router;