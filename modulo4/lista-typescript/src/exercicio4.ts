console.log("Exercicio 4");

const funcionarios = [
  { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
  { nome: "Maria", salário: 1500, setor: "vendas", presencial: false },
  { nome: "Salete", salário: 2200, setor: "financeiro", presencial: true },
  { nome: "João", salário: 2800, setor: "marketing", presencial: false },
  { nome: "Josué", salário: 5500, setor: "financeiro", presencial: true },
  { nome: "Natalia", salário: 4700, setor: "vendas", presencial: true },
  { nome: "Paola", salário: 3500, setor: "marketing", presencial: true },
];

enum SETOR {
  FI = "financeiro",
  MA = "marketing",
  VE = "vendas",
}

const funcionariosMarketing = (setorM:string) => {
   const funcionarios = [
        { nome: "Marcos", salário: 2500, setor: SETOR.MA, presencial: true },
        { nome: "Maria", salário: 1500, setor: SETOR.VE, presencial: false },
        { nome: "Salete", salário: 2200, setor: SETOR.FI, presencial: true },
        { nome: "João", salário: 2800, setor: SETOR.MA, presencial: false },
        { nome: "Josué", salário: 5500, setor:SETOR.FI, presencial: true },
        { nome: "Natalia", salário: 4700, setor: SETOR.VE, presencial: true },
        { nome: "Paola", salário: 3500, setor:SETOR.MA, presencial: true },
      ];
     funcionarios.filter((item)=>item.setor===setorM).map((itens)=>console.table(itens))
    }
    funcionariosMarketing("marketing");
