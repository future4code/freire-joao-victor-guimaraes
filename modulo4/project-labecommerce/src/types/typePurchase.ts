export type purchase = {
    id:string,
    user_id:string,
    product_id:string,
    total_price: number
}

export type purchaseData = {
    id:string,
    user_id:string,
    product_id:string,
    quantity:number,
    total_price:number
}

export type AllPurchasesPerson = {
    idPurchase:string,
        nameProduct:string,
        price:number,
        quantity:number,
        totalPrice:number
}