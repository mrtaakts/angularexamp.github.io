import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
baskets:BasketModel[] =[]
   total:number=0;
  constructor(
    private toastrService : ToastrService,
    private basketService: BasketService
    ){}

    ngOnInit()
    {
      this.baskets=this.basketService.list();
     
    }
    ngAfterContentChecked(){
      this.total=this.basketService.total;
    }

  deleteProduct(basket:BasketModel){
    this.basketService.deleteProduct(basket);
  }
 
  changeData(basket:BasketModel,quantity:any){
    
   this.basketService.changeData(basket,quantity.value)
  }

}
