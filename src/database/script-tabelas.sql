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

CREATE TABLE partida (
    id int primary key auto_increment,
    fkUsuario int,
    tentativasUsadas int,
    venceu tinyint(1) default 0,
    dataPartida timestamp default current_timestamp,
    foreign key (fkUsuario) references usuario(id)
);

select * from partida;
