var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL para autenticar");
    // Nota: Para autenticar corretamente e buscar TODOS os dados (incluindo atributos), 
    // você precisará de um JOIN na sua query de SELECT, mas vamos focar no cadastro por enquanto.
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

function cadastrarAtributos(fkUsuario, idade, classe, lugar, genero, raca, magia) {
    console.log("ACESSEI O USUARIO MODEL para cadastrar atributos");
    var instrucaoSql = `
        INSERT INTO atributos (fkUsuario, idade, classe, lugar, genero, raca, magia) 
        VALUES ('${fkUsuario}', '${idade}', '${classe}', '${lugar}', '${genero}', '${raca}', '${magia}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrarUsuario, // Exporta a nova função de usuário
    cadastrarAtributos // Exporta a nova função de atributos
};