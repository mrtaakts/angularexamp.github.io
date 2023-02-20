import { Component,EventEmitter,Input, Output } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
 total:number;
@Output() myEvent:EventEmitter<any> = new EventEmitter();

constructor(private basketService:BasketService){}



ngAfterContentChecked(){
  this.total= this.basketService.total;
}


payment(){
  
  this.basketService.payment(this.total);
  document.getElementById("paymentModalCloseBtn").click();
}
}
