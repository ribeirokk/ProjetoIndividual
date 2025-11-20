var database = require("../database/config");

function iniciarPartida(idUsuario) {
    var instrucaoSql = `
        INSERT INTO partida (fkUsuario, tentativasUsadas, venceu)
        VALUES (${idUsuario}, 0, false);
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarTentativa(idPartida, tentativaNumero) {
    var instrucao = `
        INSERT INTO tentativa_partida (fkPartida, tentativaNumero)
        VALUES (${idPartida}, ${tentativaNumero});
    `;
    console.log("Executando SQL:\n" + instrucao);
    return database.executar(instrucao);
}

function finalizarPartida(idPartida, venceu) {
    var instrucao = `
        UPDATE partida
        SET venceu = ${venceu}
        WHERE idPartida = ${idPartida};
    `;
    console.log("Executando SQL:\n" + instrucao);
    return database.executar(instrucao);
}

function atualizarStatsVitoria(idUsuario) {
    var instrucao = `
        UPDATE vitorias_geral
        SET totalVitorias = totalVitorias + 1,
            sequenciaVitorias = sequenciaVitorias + 1
        WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando SQL:\n" + instrucao);
    return database.executar(instrucao);
}

function atualizarStatsDerrota(idUsuario) {
    var instrucao = `
        UPDATE vitorias_geral
        SET totalDerrotas = totalDerrotas + 1,
            sequenciaVitorias = 0
        WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando SQL:\n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    iniciarPartida,
    registrarTentativa,
    finalizarPartida,
    atualizarStatsVitoria,
    atualizarStatsDerrota
};
