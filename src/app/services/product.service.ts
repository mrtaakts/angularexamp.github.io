import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ProductModel } from "../models/product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
   private products: ProductModel[] = [
        { name: "Peynir", price: 26.61, quantity: 100, imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTsL4vbKiHIH4ihn5TX4KPNLv170zAEgOUOE5kI-GuSR5pHtV9Gm1sV-uFfio_5WQY2otXShf1bJ_3kC-64uMRNUT3sVdgqZaFtI8Q10XqxiSjAyTjkMVWAQs_p&usqp=CAE" },
        { name: "Zeytin", price: 132, quantity: 100, imageUrl: "https://cdn.dsmcdn.com/ty127/product/media/images/20210608/19/97489456/184882800/0/0_org_zoom.jpg" },
        { name: "Tereyağı", price: 126.99, quantity: 100, imageUrl: "https://st.myideasoft.com/idea/if/83/myassets/products/137/sm-urun-gorselleri-tereyagi-ve-kaymak-412100-tereyagi-yayik-500g.jpg?revision=1638261716" },
        { name: "Lavaş", price: 27.50, quantity: 100, imageUrl: "https://cdn.yemek.com/mnresize/1250/833/uploads/2017/12/ev-yapimi-lavas-one-cikan.jpg" },
        { name: "Yeşil Zeytin", price: 99.12, quantity: 100, imageUrl: "https://images.migrosone.com/sanalmarket/product/16021256/fora-biberli-yesil-zeytin-141-180-adet-kg-223f01-1650x1650.jpg" },
        { name: "Telefon Kablosu", price: 18.90, quantity: 100, imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZhKfClHcP6BEwTCwm_WwtjxMZVu-m41wkI9gncwYDjYxtPEnJUVwyeuoEIkqpGAq-ljfkWiC3A5mXgAB_Wmh0zwUJ05NJaHcVL04k3kU&usqp=CAE" },
        { name: "Priz", price: 9.99, quantity: 100, imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQLYa9RN-TawSFE4W3821cpX9JEVO95simDCTvT26paJzTv3UbtrgjHvwVgAjsPBirgGX-WGTEcoBSjZdTbqo4-ltV7_2W-CRVdgxJat6h3A4y_gWcH4SQvcSs&usqp=CAE" },
        { name: "Ekmek", price: 3, quantity: 100, imageUrl: "https://cdn.kisikates.com.tr/image-cache/cache/recipe_main_image_large/https---cdn.kisikates.com.tr/recipe-media/1641d1e18a936b408e5eaf4bb697898204d2ea3d.jpeg" },

    ]
    constructor(private toastrService: ToastrService) { }

    add(model: ProductModel) {
        let length = this.products.filter(p => p.name.toLocaleLowerCase() == model.name.toLocaleLowerCase()).length;
        console.log(length)
        if (length > 0) {
            this.toastrService.error("ürün zaten mevcut!")
            return false;
        }
        else {
            this.products.push(model)
            this.toastrService.success(model.name + " başarıyla eklendi")
            return true;
        }
    }

    list():ProductModel[]
    {
        return this.products;
    }

}