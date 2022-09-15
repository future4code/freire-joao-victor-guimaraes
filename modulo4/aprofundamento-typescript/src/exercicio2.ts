console.log(
  "A. Entrada Parametro de *numeros*, e podem ser ordenados pelo *sort*, que adiciona num a numeros e retorna valor com o numero adicionado, e ao final mostra nos maior menor e media do numeros."
);

function obterEstatisticas(numeros: number[]): Estat {
  const numerosOrdenado: number[] = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: Estat = {
    maior: numerosOrdenado[numeros.length - 1],
    menor: numerosOrdenado[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}
type Estat = { maior: number; menor: number; media: number };
console.log("B. numeros:number[], numerosOrdenados:number, soma: number   ");
// type AmostraDeIdades feito com ajuda da correção
type AmostraDeIdades = {
  numeros: number[]
  obterEstatisticas: (numeros: number[]) => Estat;
};

console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]))
