### EXERCICIO 1

>
> A) Chave Estrangeira refere ao tipo de relação entre tabelas distintas, caso sejam relacionadas.
> B) INSERT INTO avaliacao VALUES ("teste","filme bacana",6.5,"001");
> C) INSERT INTO avaliacao VALUES ("teste","filme bacana",6.5,"008"); - Error Code: 1452. Cannot add or update a child row: a foreign  >  key constraint fails (`freire-joao-victor`.`avaliacao`, CONSTRAINT `avaliacao_ibfk_1` FOREIGN KEY (`filmes_id`) REFERENCES `filmes`   (`id`))
> D) ALTER TABLE filmes DROP avaliacao;
> E) DELETE FROM filmes WHERE id = "001"; - Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails(`freire-joao-victor`.`avaliacao`, CONSTRAINT `avaliacao_ibfk_1` FOREIGN KEY (`filmes_id`) REFERENCES `filmes` (`id`)) - Diz que não posso deletar por conta da chave estrangeira


 

### EXERCICIO 2
### EXERCICIO 3