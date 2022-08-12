console.log("Exercicio 3");

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type CatalogoFilmes = {
  name: string;
  anoLancamento: number;
  genero: string;
};
type Pontuacao = { pontuacao: number };
const filme1: CatalogoFilmes | (CatalogoFilmes & Pontuacao) = {
  name: "Duna",
  anoLancamento: 2021,
  genero: GENERO.ACAO,
};
const filme2: CatalogoFilmes | (CatalogoFilmes & Pontuacao) = {
  name: "Duna",
  anoLancamento: 2021,
  genero: GENERO.ACAO,
  pontuacao: 74,
};

console.log("");

console.log(filme1, filme2);
