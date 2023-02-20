import { ProductModel } from "./product";

export class BasketModel{
    product:ProductModel;
    quantity:number;
    constructor(product:ProductModel,quantity:number)
    {
        this.product=product;
        this.quantity=quantity;
    }
}