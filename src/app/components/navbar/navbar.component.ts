import { Component } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent 
{
  baskets: BasketModel[]=[];
  total:number=0;
  
  constructor(private basketService:BasketService){}

  ngOnInit()
  {
    this.baskets=this.basketService.list();
  }
  ngAfterContentChecked()
  {
    this.total=this.basketService.total
  }
 
}
