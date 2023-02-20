import { Component } from '@angular/core';
import { OrderModel } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  orders:OrderModel[]=[];

  constructor(private orderService:OrderService){}

  ngAfterContentChecked(){
    this.orders=this.orderService.orders;
  }
}
