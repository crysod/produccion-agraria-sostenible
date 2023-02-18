import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CartService } from "../../../core/services/web/cart/cart.service";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public cart: any[] = [];
  public result: boolean = false;
  public orden!: any;

  constructor(public CartService: CartService) { }

  ngOnInit(): void {
    this.getFromServiceCartLocalStorage();
    this.buyCartShop();
  }

  getFromServiceCartLocalStorage(): Array<Object> {
    if (!localStorage.getItem('cart')) {
      return [];
    }

    this.result = true;
    return this.cart = this.CartService.getCartFromLocalStorage();
  }

  deleteCart() {
    return this.CartService.deleteCart();
  }

  buyCartShop() {
    const orden = this.CartService.buyCart();

    this.orden = {
      referencesProducto: orden?.referencesProducto,
      total: orden?.total,
      direccionPedido: null,
      nota: null,
    }


  }


  buy() {
    Swal.fire('Para comprar debes tener una cuenta o estar logueado')
    console.log(this.orden)
  }

}
