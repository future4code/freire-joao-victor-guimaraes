import { AllPurchasesPerson, purchaseData } from "../types/typePurchase";
import { connection } from "./connection";
type PurchaseByUser = {
  idPerson:string,
  namePerson:string,
  purchases:AllPurchasesPerson[];
}
export default async function selectPurchaseUser(user_id: string) {
  const result = await connection?.raw(`
    select labecommerce_user.id as IdPessoa, labecommerce_user.name as NomePessoa, labecommerce_purchases.id as IdCompra, 
    labecommerce_products.name as NomeProduto,labecommerce_products.price as PrecoUnitario ,labecommerce_purchases.quantity as Quantidade, labecommerce_purchases.total_price as PrecoTotal 
     from labecommerce_purchases inner join labecommerce_user on labecommerce_purchases.user_id = labecommerce_user.id 
     inner join labecommerce_products on labecommerce_purchases.product_id = labecommerce_products.id where labecommerce_user.id = "${user_id}" ;
     `)
     let allPurchases:AllPurchasesPerson[] =[] 
    let infoPerson:any={};
   
    result[0].map((person:any)=>{
      infoPerson ={ 
        idPerson:person.IdPessoa,
        namePerson:person.NomePessoa
      },
      allPurchases.push({
        idPurchase:person.IdCompra,
        nameProduct:person.NomeProduto,
        price:person.PrecoUnitario,
        quantity:person.Quantidade,
        totalPrice:person.PrecoTotal
      })
    })
    const allPurByUser:PurchaseByUser ={
      idPerson:infoPerson.idPerson,
      namePerson:infoPerson.namePerson,
      purchases:allPurchases
    }

  
  return result
}
