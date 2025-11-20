var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");

router.post("/registrar", function(req, res) {
    partidaController.registrar(req, res);
});

module.exports = router;
