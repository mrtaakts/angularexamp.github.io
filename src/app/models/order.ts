import { BasketModel } from "./basket";

export class OrderModel
{
    baskets:BasketModel[];
    date:string;
    
    constructor(baskets:BasketModel[]){
        this.baskets=baskets;
        this.date=Date();
    }
}