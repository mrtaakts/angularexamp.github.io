import { Component, ElementRef, ViewChild } from "@angular/core";
import { ProductModel } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
    selector: "app-product-add",
    templateUrl: './product.add.component.html'
})
export class ProductAddComponent {
    @ViewChild("inputName") name: ElementRef
    @ViewChild("inputQuantity") quantity: ElementRef
    @ViewChild("inputPrice") price: ElementRef
    @ViewChild("inputImage") image: ElementRef
    constructor(private productService: ProductService) { }

    ngOnInit(): void {

    }

    add(name: any, quantity: any, price: any, image: any) {
        let model = new ProductModel();
        model.name = name.value;
        model.quantity = quantity.value;
        model.price = price.value;
        model.imageUrl = image.value;
        let status: boolean = this.productService.add(model);
        status == true ? this.clear() : null

    }
    clear() {
        this.name.nativeElement.value = "";
        this.quantity.nativeElement.value = "";
        this.price.nativeElement.value = "";
        this.image.nativeElement.value = "";
    }
}