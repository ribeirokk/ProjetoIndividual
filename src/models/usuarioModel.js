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

module.exports = {
    autenticar,
    cadastrarUsuario,
    cadastrarAtributos 
};