function comparaDoisNumeros(num1:number, num2:number):number{
    let maiorNumero;
    let menorNumero;
    const frase:string = "A diferença é de";
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return  diferenca 
  }
  console.log(comparaDoisNumeros(10,2))