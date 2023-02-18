import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import Swal from 'sweetalert2'

// App
import { Cart } from "../../../models/web/cart/cart";



@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Cart[] = [];
  public addProduct: any[] = [];


  constructor(private Http: HttpClient,
    private _Router: Router) { }


  getLenghtCartFromLocalStorage(): number {
    this.cart = JSON.parse(localStorage.getItem('cart') || '')
    return this.cart.length;
  }

  getCartFromLocalStorage(): Array<any> {
    this.cart = JSON.parse(localStorage.getItem('cart') || '');
    return this.cart;
  }

  setCarttoLocalStorage(producto: any) {
    if (!localStorage.getItem('cart')) {
      this.addProduct.push(producto);
      localStorage.setItem('cart', JSON.stringify(this.addProduct));
      this._Router.navigateByUrl('cart')
    } else {
      this.addProduct = JSON.parse(localStorage.getItem('cart') || '{}');
      this.addProduct.push(producto);
      localStorage.setItem('cart', JSON.stringify(this.addProduct));
      this._Router.navigateByUrl('cart')
    }
  }

  deletesetCarttoLocalStorage(_id: any) {

    let cart = this.getCartFromLocalStorage();

    Swal.fire({
      title: '¿Estas Seguro?',
      text: "Vas a eliminar este producto de tu carrito de compras",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Quiero borrar'
    }).then((result) => {
      if (result.isConfirmed) {

        cart = cart.filter((x: any) => { return x._id !== _id; });
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.reload();

        if (cart.length <= 0) {
          window.location.reload();
          localStorage.removeItem('cart');
        }
        Swal.fire(
          'Eliminados',
          'Carrito vacio',
          'success'
        )
      }
    })
  }

  deleteCart() {

    Swal.fire({
      title: '¿Estas Seguro?',
      text: "Vas a eliminar todos los productos de tu carrito de compras",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Quiero borrar'
    }).then((result) => {
      if (result.isConfirmed) {

        localStorage.removeItem('cart');
        window.location.reload();

        Swal.fire(
          'Eliminados',
          'Carrito vacio',
          'success'
        )
      }
    })

  }

  editLocalStorage(product:any[]){
      localStorage.removeItem('cart');
      localStorage.setItem('cart',JSON.stringify(product))
      window.location.reload();
  }


  buyCart(){

     if(!localStorage.getItem('cart')){
        return;
     }

     const response = this.getCartFromLocalStorage().map((x)=>[x._id]);
     const total = this.getCartFromLocalStorage().map((x)=> x.cantidad * x.precio);
     const suma = total.reduce((a,b)=>a+b);

      return {
        referencesProducto:response,
        total:suma
      }

    }
}


