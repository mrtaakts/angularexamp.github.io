import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { ProductModel } from 'src/app/models/product';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: ProductModel[] = []
  

  constructor(
    private toastrService: ToastrService,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.list();
  }


  addBasket(product: ProductModel) {

    let quantity = parseFloat((<HTMLInputElement>document.getElementById("quantity-" + product.name)).value)
    let basketModel = new BasketModel(product, quantity);

    (<HTMLInputElement>document.getElementById("quantity-" + product.name)).value = "1";
    this.basketService.addBasket(basketModel)
  }
}
