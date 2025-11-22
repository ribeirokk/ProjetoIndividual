var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL para autenticar");
    var instrucaoSql = `
        SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarUsuario(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL para cadastrar usuario");
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarAtributos(fkUsuario, idade, classe, lugar, genero, raca, magia, faccao) {
    console.log("ACESSEI O USUARIO MODEL para cadastrar atributos");

    var instrucaoSql = `
        INSERT INTO atributos (fkUsuario, idade, classe, lugar, genero, raca, magia, faccao) 
        VALUES (${fkUsuario}, '${idade}', '${classe}', '${lugar}', '${genero}', '${raca}', '${magia}', '${faccao}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function soldadosImperiais() {
    console.log("ACESSEI");
    var instrucaoSql = `
    select count(faccao) as faccao from atributos where faccao like "Imperio";
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function soldadosStormcloaks() {
    console.log("ACESSEI");
    var instrucaoSql = `
    select count(faccao) as faccao from atributos where faccao like "Stormcloaks";
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function classeMaisUsada() {
    console.log("ACESSEI");
    var instrucaoSql = `
    SELECT
    classe,
    COUNT(classe) AS quantidade_repeticoes 
FROM
    atributos
GROUP BY
    classe 
ORDER BY
    quantidade_repeticoes DESC
LIMIT 1; 

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function magiaMaisUsada() {
    console.log("ACESSEI");
    var instrucaoSql = `
    SELECT
    magia,
    COUNT(magia) AS quantidade_repeticoes 
FROM
    atributos
GROUP BY
    magia 
ORDER BY
    quantidade_repeticoes DESC
LIMIT 1; 

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function racaPredominante() {
    console.log("ACESSEI");
    var instrucaoSql = `
    SELECT
    raca,
    COUNT(raca) AS quantidade_repeticoes 
FROM
    atributos
GROUP BY
    raca 
ORDER BY
    quantidade_repeticoes DESC
LIMIT 1; 

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    autenticar,
    cadastrarUsuario,
    cadastrarAtributos,
    soldadosImperiais,
    soldadosStormcloaks,
    classeMaisUsada,
    magiaMaisUsada,
    racaPredominante,
};