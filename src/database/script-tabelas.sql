use skyrimProjeto;

show tables;

describe atributos;
describe usuario;
describe partida;

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
lugar varchar(100),
genero varchar(20),
raca varchar(20),
magia varchar(20),
faccao varchar(20),
primary key (fkUsuario),
foreign key (fkUsuario) references usuario (id)
);

create table partida (
id int primary key auto_increment,
fkUsuario int,
tentativasUsadas int,
venceu tinyint(1),
dataPartida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
finalizada tinyint(1),
foreign key (fkUsuario) references usuario(id)
);
