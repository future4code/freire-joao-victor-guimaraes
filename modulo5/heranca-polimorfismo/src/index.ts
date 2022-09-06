import { AddressInfo } from "net";
import app from "./app";
import {User} from "./endpoint/heranca/exercicio1"
import {Customer} from "./endpoint/heranca/exercicio2"
import { Client } from "./endpoint/polomorfismo/exercicio1";
import { Place } from "./endpoint/polomorfismo/exercicio2";
// HERANÇA 
// EXERCICIO --- 1
const userTest = new User("1","2","3","433",)
// console.log(userTeste)
// a)Seria possível imprimir a senha (password) atrelada a essa instância?
// Não, pois ele não atibuido a um metodo para acessar
// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// Uma vez

// EXERCICIO --- 2
const customerTest = new Customer ("01","j@lbn.com","BR","123","CC")
// a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
// -- Uma vez
// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// -- Duas vezes, pois ele o Customer é uma extensão de User
// console.log(customerTest)

// EXERCICIO --- 3
// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
//  Não, pois ela continua sendo private
// console.log(customerTest.getId())
// console.log(customerTest.getName())
// console.log(customerTest.getEmail())
// console.log(customerTest.getCreditCard())
// console.log(customerTest.purchaseTotal = 5000 ) 

// EXERCICIO --- 4
//  console.log(customerTest.introduceYourself())

// EXERCICIO --- 5
// console.log(customerTest.introduceYourselfWithName())

// --------------------------------------------------------------

// POLIMORFISMO 
// EXERCICIO --- 1
const client: Client ={
    name:"Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill:() => {
        return 2
    }
}
// console.log(client)
// a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
// Foi impresso três, não foi impresso o que estava dentro do calculeteBill pois e uma função

// EXERCICIO --- 2
// const testPlace = new Place ("31030111")
// console.log(testPlace)
//a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
//error TS2511: Cannot create an instance of an abstract class.
// b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
console.log(Place)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});