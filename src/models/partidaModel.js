var database = require("../database/config");

function registrar(idUsuario, tentativas, venceu) {
    var sql = `
        INSERT INTO partida (fkUsuario, tentativasUsadas, venceu, finalizada)
        VALUES (${idUsuario}, ${tentativas}, ${venceu}, 1)
    `;
    return database.executar(sql);
}

module.exports = {
    registrar
};
