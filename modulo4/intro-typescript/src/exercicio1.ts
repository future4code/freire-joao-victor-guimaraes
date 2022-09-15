console.log("Exercicio 1");

function checaTriangulo(a: number, b: number, c: number): string {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  }
  return "Isósceles";
}

console.log(checaTriangulo(2, 2, 2));
