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
                        email: resultadoAutenticar[0].email,
                        faccao: resultadoAutenticar[0].faccao
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

function soldadosImperiais(req, res) {
        usuarioModel.soldadosImperiais()
            .then(function (resultadoSoldadosImperiais) {
                console.log(`\nResultados encontrados: ${resultadoSoldadosImperiais.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoSoldadosImperiais)}`);

                if (resultadoSoldadosImperiais.length == 1) {
                    res.json({
                        faccao: resultadoSoldadosImperiais[0].faccao
                    });
                } else if (resultadoSoldadosImperiais.length == 0) {
                    res.status(403).send("erro");
                } 
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    };
    
function soldadosStormcloaks(req, res) {

        usuarioModel.soldadosStormcloaks()
            .then(function (resultadoSoldadosStormcloaks) {
                console.log(`\nResultados encontrados: ${resultadoSoldadosStormcloaks.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoSoldadosStormcloaks)}`);

                if (resultadoSoldadosStormcloaks.length == 1) {
                    res.json({
                        faccao: resultadoSoldadosStormcloaks[0].faccao
                    });
                } else if (resultadoSoldadosStormcloaks.length == 0) {
                    res.status(403).send("erro");
                } 
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    };


function magiaMaisUsada(req, res) {

        usuarioModel.magiaMaisUsada()
            .then(function (resultadoMagiaMaisUsada) {
                console.log(`\nResultados encontrados: ${resultadoMagiaMaisUsada.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoMagiaMaisUsada)}`);

                if (resultadoMagiaMaisUsada.length == 1) {
                    res.json({
                        magia: resultadoMagiaMaisUsada[0].magia
                    });
                } else if (resultadoMagiaMaisUsada.length == 0) {
                    res.status(403).send("erro");
                } 
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    };

function classeMaisUsada(req, res) {
        usuarioModel.classeMaisUsada()
            .then(function (resultadoClasseMaisUsada) {
                console.log(`\nResultados encontrados: ${resultadoClasseMaisUsada.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoClasseMaisUsada)}`);

                if (resultadoClasseMaisUsada.length == 1) {
                    res.json({
                        classe: resultadoClasseMaisUsada[0].classe
                    });
                } else if (resultadoClasseMaisUsada.length == 0) {
                    res.status(403).send("erro");
                } 
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    };

function racaPredominante(req, res) {
        usuarioModel.racaPredominante()
            .then(function (resultadoRacaPredominante) {
                console.log(`\nResultados encontrados: ${resultadoRacaPredominante.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoRacaPredominante)}`);

                if (resultadoRacaPredominante.length == 1) {
                    res.json({
                        raca: resultadoRacaPredominante[0].raca
                    });
                } else if (resultadoRacaPredominante.length == 0) {
                    res.status(403).send("erro");
                } 
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    };

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
    var faccao = req.body.faccaoServer;

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

    // Primeiro: cadastra o usuário
    usuarioModel.cadastrarUsuario(nome, email, senha)
        .then(function (resultadoInsertUsuario) {
            console.log("INSERT usuario OK:", resultadoInsertUsuario);

            var novoUsuarioId = resultadoInsertUsuario.insertId;

            // Segundo: cadastrar atributos (agora com facção)
            usuarioModel.cadastrarAtributos(
                novoUsuarioId, idade, classe, lugar, genero, raca, magia, faccao
            )
                .then(function () {
                    console.log("INSERT atributos OK");

                    res.status(201).json({
                        message: "Cadastro completo realizado com sucesso!",
                        usuarioId: novoUsuarioId
                    });
                })
                .catch(function (erroAtributos) {
                    console.log("\nErro no INSERT atributos:", erroAtributos.sqlMessage);
                    res.status(500).json(erroAtributos.sqlMessage);
                });

        })
        .catch(function (erroUsuario) {
            console.log("\nErro no INSERT usuario:", erroUsuario.sqlMessage);
            res.status(500).json(erroUsuario.sqlMessage);
        });
}

module.exports = {
    autenticar,
    cadastrar,
    soldadosImperiais,
    soldadosStormcloaks,
    magiaMaisUsada,
    classeMaisUsada,
    racaPredominante,
};
    