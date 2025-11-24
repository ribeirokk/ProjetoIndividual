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

function obterDadosGrafico(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", fkUsuario)
    var instrucaoSql = `
        SELECT tentativasUsadas
        FROM partida
        WHERE fkUsuario = ${fkUsuario}
        ORDER BY id DESC LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function partidasJogadas(fkUsuario) {
    var instrucaoSql = `
        SELECT COUNT(*) AS partidasJogadas
        FROM partida
        WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function partidasGanhas(fkUsuario) {
    var instrucaoSql = `
        SELECT COUNT(*) AS partidasGanhas
        FROM partida
        WHERE fkUsuario = ${fkUsuario} AND venceu = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function partidasPerdidas(fkUsuario) {
    var instrucaoSql = `
        SELECT COUNT(*) AS partidasPerdidas
        FROM partida
        WHERE fkUsuario = ${fkUsuario} AND venceu = 0;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function aproveitamento(fkUsuario) {
    var instrucaoSql = `
        SELECT 
            ROUND(
                (SUM(CASE WHEN venceu = 1 THEN 1 ELSE 0 END) / COUNT(*)) * 100,
                2
            ) AS aproveitamento
        FROM partida
        WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function vitoriasDerrotas(idUsuario) {
    var instrucaoSql = `
        SELECT 
            SUM(CASE WHEN ganhou = 1 THEN 1 ELSE 0 END) AS vitorias,
            SUM(CASE WHEN ganhou = 0 THEN 1 ELSE 0 END) AS derrotas
        FROM partida
        WHERE fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    obterClasse,
    obterRaca,
    obterFaccao,
    obterDadosGrafico,
    partidasJogadas,
    partidasGanhas,
    partidasPerdidas,
    aproveitamento,
    vitoriasDerrotas
};
