# Aprofundamento-SQL

### Exercicio-1

>
> A) ALTER TABLE Actor DROP COLUMN salary; - Este comando excluira a colina de salario.
>
> B) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); - Altera o "GENDER" para "SEX".
>
> C) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); - Altera o "VARCHAR" de 6 para 255.
>
> D) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
>

### Exercicio-2

>
> A) UPDATE Actor SET name = "FERNANDA MONTENEGRO", birth_date = "1929-10-16"  WHERE id = "003"
> B) UPDATE Actor SET name = "JULIANA PAES"  WHERE id = "005"; - UPDATE Actor SET name = "Juliana Paes"  WHERE id = "005";
> C) UPDATE Actor SET name = "Juliano Praes", salary = 100000, birth_date = "2000-03-26", gender = "male"  WHERE id = "009";
> D) UPDATE Actor SET salary = 100000 WHERE id = "009"; - Não deu erro.
>

### Exercicio-3

>
> A) DELETE FROM Actor WHERE name = "FERNANDA MONTENEGRO"; 
> B) DELETE FROM Actor WHERE gender = "male" and salary > 1000000;
>

### Exercicio-4

>
> A) SELECT MAX(salary) from Actor ;
> B) SELECT MIN(salary) from Actor WHERE gender = "female" ;
> C) SELECT COUNT(*) FROM Actor WHERE gender = "female";
> D) SELECT SUM(salary) FROM Actor; 
>

### Exercicio-5

>
> A) SELECT COUNT(*), gender FROM Actor GROUP BY gender; - Acredito que ele ira contar e agrupar de acordo com Genero.
> B)  SELECT id, name from Actor ORDER BY name DESC;
> C)  SELECT * FROM Actor ORDER BY salary;
> D)  SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
> E)  SELECT AVG(salary), gender FROM Actor GROUP BY gender;
>

### Exercicio-6

>
> A) ALTER TABLE filmes ADD playing_limit_date DATE;
> B) ALTER TABLE filmes CHANGE avaliacao avaliacao float;
> C) UPDATE filmes SET playing_limit_date = "2020-12-31" WHERE id = "003";
> D) DELETE FROM filmes WHERE id = "001";
>

### Exercicio-7

>
> A) SELECT titulo, avaliacao FROM filmes WHERE avaliacao > 7.5;
> B) SELECT AVG(avaliacao) from filmes; 
> C)
> D) 
> E) SELECT MAX(avaliacao)from filmes; 
> F) SELECT MIN(avaliacao)from filmes; 
>