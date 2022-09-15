console.log("Exercicio 1")

const fraseApresentacao = (nome:string,data:string) => {

    console.log(`Olá me chamo ${nome}, nasci no dia ${data.slice(0,2)} do mês de ${data.slice(3,5)} do ano de ${data.slice(6,10)}` )

 

}
fraseApresentacao("Mickey","21/07/1997")