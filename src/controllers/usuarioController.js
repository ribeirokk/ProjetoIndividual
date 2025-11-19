var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {
                    res.json({
                        id: resultadoAutenticar[0].id,
                        nome: resultadoAutenticar[0].nome,
                        email: resultadoAutenticar[0].email
                        // Faltam idade, classe, etc. aqui.
                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrar(req, res) {

    var nome = req.body.nomeServer;
    var idade = req.body.idadeServer;
    var classe = req.body.classeServer;
    var lugar = req.body.lugarServer;
    var genero = req.body.generoServer;
    var raca = req.body.racaServer;
    var magia = req.body.magiaServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
        return; 
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
        return;
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
        return;
    } 
    
    usuarioModel.cadastrarUsuario(nome, email, senha)
        .then(function (resultadoInsertUsuario) {
            console.log("Primeiro INSERT (Usuário) realizado com sucesso. Resultado:", resultadoInsertUsuario);

          // IMPORTANTE: Captura o ID do usuário recém-criado.
            // O pacote mysql2 geralmente retorna o ID em 'insertId'.
            var novoUsuarioId = resultadoInsertUsuario.insertId;

            // 4. Executa o segundo INSERT (ATRIBUTOS), usando o novo ID como FK
            usuarioModel.cadastrarAtributos(novoUsuarioId, idade, classe, lugar, genero, raca, magia)
                .then(function (resultadoInsertAtributos) {
                    console.log("Segundo INSERT (Atributos) realizado com sucesso.");
                    res.status(201).json({
                        message: "Cadastro completo realizado com sucesso!",
                        usuarioId: novoUsuarioId
                    });
                })
                .catch(function (erroAtributos) {
                    console.log("\nHouve um erro ao realizar o cadastro dos atributos! Erro: ", erroAtributos.sqlMessage);
                    res.status(500).json(erroAtributos.sqlMessage);
                });

        })
        .catch(function (erroUsuario) {
            console.log("\nHouve um erro ao realizar o cadastro do usuário! Erro: ", erroUsuario.sqlMessage);
            res.status(500).json(erroUsuario.sqlMessage);
        });
}

module.exports = {
    autenticar,
    cadastrar
};
