import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


// Class
import { Products } from "../../../core/models/web/products/class/product.class";

// Models
import { Cart } from 'src/app/core/models/web/cart/cart';

// Services
import { CartService } from "../../../core/services/web/cart/cart.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() public product: any;
  public cantidad!:FormGroup;
  public validateProduct: any[] = [];
  public validate:boolean = false;
  public alert!:string;

  constructor(public CartService:CartService,
              public fb:FormBuilder,
              public _Router:Router) {

    this.cantidad = this.fb.group({
         cantidad:['',[Validators.required,
                       Validators.pattern("^[0-9]+$"),
                       Validators.minLength(1)]]
    })
   }

  ngOnInit(): void {

  }

  addToCart(product: Products) {
    const { _id, name, precio, existencias } = product;

     if(localStorage.getItem('cart')){
      this.CartService.getCartFromLocalStorage().find(x=>{
             if(x._id === _id) {
               this.validate = true;
             }
      });

    }

    if (this.cantidad.value.cantidad > existencias) {
        this.alert = `Superaste el stock`;
        this.cantidad.invalid;
        return;
    }

    if (this.cantidad.value.cantidad === 0) {
      this.alert = `No puedes añadir 0 productos`;
      this.cantidad.invalid;
      return;
    }

    if (this.cantidad.value.cantidad > 0  && this.cantidad.value.cantidad < existencias && !this.validate ) {
      this.alert = "";
      this.cantidad.invalid;
      const producto = {_id, name, precio, cantidad:this.cantidad.value.cantidad, existencias}
      this.CartService.setCarttoLocalStorage(producto);
    }

  }


  redirectToCart(){
    this._Router.navigateByUrl("cart");
  }


  ngOnDestroy(): void {

  }

}

