"use strict";
console.log('Exercicio 1 ');
let minhaString;
console.log("A- O tipo 'number' não pode ser atribuído ao tipo 'string'.");
let meuNumber;
console.log("B- Utilizamos UNION TYPE para atribuir outro calor a variavel.");
const br = {
    name: "Bruno",
    age: 30,
    corFavorita: "roxo"
};
const murilo = {
    name: "murilo",
    age: 24,
    corFavorita: "laranja"
};
var Role;
(function (Role) {
    Role["Preto"] = "Verde";
    Role["Verde"] = "Preto";
})(Role || (Role = {}));
const beterraba = {
    name: "ricardo",
    age: 30,
    corFavorita: `${Role.Preto}`
};
console.log("C", murilo, br, beterraba);
console.log("D", Role.Preto);
//# sourceMappingURL=exercicio1.js.map