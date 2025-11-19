create database skyrimPI;

use skyrimPI;

create table usuario (
id int primary key auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(50)
);

create table atributos (
fkUsuario int,
idade int,
classe varchar(50),
lugar varchar (100),
genero varchar(20),
raca varchar(20),
magia varchar(20),
primary key (fkUsuario),
foreign key (fkUsuario) references usuario (id)
);

select * from usuario;

select * from atributos	;

create table partida (
    idPartida int primary key auto_increment,
    fkUsuario int,
    tentativasUsadas int,
    venceu boolean default false,
    foreign key (fkUsuario) references usuario(id)
);

create table tentativa_partida (
    idTentativa int primary key auto_increment,
    fkPartida int,
    tentativaNumero int,
    foreign key (fkPartida) references partida(idPartida)
);

create table vitorias_geral (
    fkUsuario int primary key,
    totalVitorias int,
    totalDerrotas int,
    sequenciaVitorias int, 
    foreign key (fkUsuario) references usuario(id)
);

