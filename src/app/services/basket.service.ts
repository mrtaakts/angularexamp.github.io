import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from '../models/basket';
import { OrderModel } from '../models/order';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private baskets :BasketModel[]=[];
  total:number=0;
  orders:OrderModel[]=[];
  constructor(
    private toastrService:ToastrService,
    private orderService:OrderService
    ) { }

  addBasket(model:BasketModel)
  {
    let basketModel:BasketModel[] = this.baskets.filter(b=>b.product==model.product)
    if(basketModel.length>0)
    {
      model.quantity+=basketModel[0].quantity;
      this.changeData(basketModel[0],model.quantity)

    }else
    {
      this.baskets.push(model);
      this.toastrService.info("Ürün sepete eklendi");
      this.calc();
    } 

  }
  list():BasketModel[]{
    return this.baskets;
  }

  deleteProduct(basket:BasketModel){
    let index = this.baskets.indexOf(basket);
    this.baskets.splice(index,1);
    this.toastrService.info(basket.product.name + " ürün sepetinizden başarıyla silindi");
    this.calc();
  }
  calc(){
    this.total=0;
    this.baskets.forEach(element => {
      this.total=this.total+(element.product.price * element.quantity);
    });
    
  }
  changeData(basket:BasketModel,quantity:number)
  {

    let index = this.baskets.indexOf(basket);
    this.baskets[index].quantity=quantity;
    this.calc();
  }
  payment(total:number){
    if(this.total==total){
      let count = this.baskets.length;
      this.orderService.addOrder(this.baskets.slice(0,this.baskets.length));
      this.baskets.splice(0,count);
      this.toastrService.info("Ödeme başarılı. Siparişiniz sevk aşamasına geçti");
    }
    this.calc();
  }

 
}
