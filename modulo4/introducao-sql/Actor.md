### Exercício 1
USE `dataBase`;

CREATE TABLE Actor( 
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
); 

A)


B) - show tables;
C) - describe Actor;


### Exercício 2

A) - insert into Actor (id,name,salary,birth_date,gender)
values("002", "Glória Pires",1200000,"1963-08-23","female");

B) - Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Erro de duplição de primary key

C) - INSERT INTO Actor (id, name, salary) VALUES(
  "003", "Fernanda Montenegro",300000, "1929-10-19",
 "female");

 Resposta de erro - Error Code: 1136. Column count doesn't match value count at row 1 -- 
A contagem de colunas não corresponde à contagem de valores na linha 1


D) - INSERT INTO Actor (id, salary, birth_date, gender)
VALUES( "004", 400000, "1949-04-18", "male");
- Error Code: 1364. Field 'name' doesn't have a default value -  O campo 'nome' não tem um valor padrão



E) - INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes",719333.33,1979-03-26, 
  "female"); - Error Code: 1292.  - Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

F) - insert into Actor (id,name,salary, birth_date,gender)
values( "006","Tom Holland",5000000,"1996-06-01",
"male");

insert into Actor (id, name, salary, birth_date,gender)
values("007","Zendaya Maree",220000,"1996-09-01",
"female");

### Exercício 3

A) - SELECT * from Actor WHERE gender = "female";

B) - SELECT name, salary from Actor where name = "Tony Ramos";

C) - SELECT * FROM Actor WHERE gender = "invalid";

D) - SELECT id, name, salary FROM Actor WHERE salary <500001;

E) - Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' - o select não encontrou o campo "nome" pois ele não existe na tabela Actor.

### Exercício 4

A) - O SELECT realizara uma busca na tabela de A OU J Com Salary acima de R$300.000.

B) - SELECT * FROM Actor 
WHERE (name BETWEEN "B%" AND "Z%") AND salary> 350000;

C) - SELECT * FROM Actor 
WHERE (name LIKE "G%" OR name LIKE "g%");

D) - SELECT *FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") and (salary BETWEEN 300000 and  900000);
### Exercício 5

 A) - CREATE TABLE filmes (
id varchar(255)	PRIMARY KEY,
titulo varchar(255) NOT NULL UNIQUE,
sinopse TEXT NOT NULL,
data_de_lançamento DATE NOT NULL,
avaliacao INT NOT NULL
);

B) - insert into filmes (id,titulo,sinopse,data_de_lançamento,avaliacao)
values("001","Se Eu Fosse Você","Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos","2006-01-06",7);  
C) - insert into filmes (id,titulo,sinopse,data_de_lançamento,avaliacao)
values("002","Doce de mãe","Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar
e não poderá mais morar com ela","2012-12-27",10);
D) - insert into filmes (id,titulo,sinopse,data_de_lançamento,avaliacao)
values(
"003","Dona Flor e Seus Dois Maridos",".Dona Flor é uma sedutora professora
 de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates.
 A vida de abusos acaba por acarretar sua morte precoce.","2017-11-02",8
);
E) - insert into filmes (id,titulo,sinopse,data_de_lançamento,avaliacao)
values(
"004","O Auto da Compadecida","Esse célebre filme brasileiro é uma adaptação da
 peça teatral de mesmo nome do 
paraibano Ariano Suassuna, encenada em 1955.","2000-09-10",7);



