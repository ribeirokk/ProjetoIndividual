var database = require("../database/config");

function registrar(idUsuario, tentativas, venceu) {
    var sql = `
        INSERT INTO partida (fkUsuario, tentativasUsadas, venceu, finalizada)
        VALUES (${idUsuario}, ${tentativas}, ${venceu}, 1)
    `;
    return database.executar(sql);
};

function obterClasse() {
    console.log("ACESSEI");
    var instrucaoSql = `
    SELECT classe as classe, COUNT(classe) AS quantidade_repeticoes 
    FROM atributos GROUP BY classe  ORDER BY quantidade_repeticoes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function obterRaca() {
    console.log("ACESSEI");
    var instrucaoSql = `
    SELECT raca as raca, COUNT(raca) AS quantidade_repeticoes 
    FROM atributos GROUP BY raca  ORDER BY quantidade_repeticoes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function obterFaccao() {
    console.log("ACESSEI");
    var instrucaoSql = `
    SELECT faccao as faccao, COUNT(faccao) AS quantidade_repeticoes 
    FROM atributos GROUP BY faccao  ORDER BY quantidade_repeticoes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    registrar,
    obterClasse,
    obterRaca,
    obterFaccao
};
