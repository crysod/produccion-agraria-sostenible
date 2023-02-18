import { Component, OnInit } from '@angular/core';
import { OneProductService } from "../../../../core/services/web/one-product/one-product.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

// Services
import { CartService } from "../../../../core/services/web/cart/cart.service";

// Swal
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  public oneProduct!:any;
  public param!:any;
  public cantidad!:FormGroup;
  public validate:boolean = false;
  public alert!:string;

  constructor(private _AcivateRoute: ActivatedRoute,
              public OneProductService:OneProductService,
              public CartService:CartService,
              public fb:FormBuilder,
              public _Router:Router) {
                this.cantidad = this.fb.group({
                   cantidad: ['',[Validators.required,
                                  Validators.pattern("^[0-9]+$"),
                                  Validators.minLength(1)]]
                })
               }

  ngOnInit(): void {
    this.param = this._AcivateRoute.snapshot.params;
    this.getOneProductFromApiWeb(this.param.id);
  }

  getOneProductFromApiWeb(id:any) {
     this.OneProductService.getOneProductFromWeb(id)
                           .subscribe({
                              next:(data:any)=>{
                                  this.oneProduct = data.response[0];
                              },
                              error:(error)=>{
                                 console.log(error);
                              }
                           });
  }

  addToCart(product: any) {
    const { _id, name, precio, existencias } = product;
    console.log(product)
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

  buy(product:any){
    Swal.fire('Para comprar debes tener una cuenta o estar logueado')
    const { _id, name, precio, existencias } = product;

    const payload = {
        referencesProducto:[_id],
        total: precio * this.cantidad.value.cantidad,
        direccionPedido: null,
        nota: null
    }

    console.log(payload)
  }

  redirectToCart(){
    this._Router.navigateByUrl("cart");
  }

}
