```function calculaSalario(qtdeCarrosVendidos, valorTotalVenda){
const salarioVendedores = 2000
let porcentagemComissao = 0.95
let valorComissao = valorTotalVenda - ( valorTotalVenda * porcentagemComissao)+(qtdeCarrosVendidos*100)
let salarioFinal = salarioVendedores + valorComissao

return salarioFinal
}```