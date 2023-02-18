import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { Products } from 'src/app/core/models/web/products/class/product.class';

// Services
import { CartService } from "../../../core/services/web/cart/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() public cart: any = [];
  public product:Products[] = [];
  public alert!: string;
  public cantidad: boolean = false;
  public editarCantidad!: FormGroup;

  constructor(public CartService: CartService,
    public fb: FormBuilder) {
    this.editarCantidad = this.fb.group({
      cantidad: ['', [Validators.required,
      Validators.pattern("^[0-9]+$")]]
    })
  }

  ngOnInit(): void {
  }

  deleteProductFromCart(id: number) {
    this.CartService.deletesetCarttoLocalStorage(id);
  }

  editCartMode() {
    this.cantidad = true;
    return;
  }

  editCart(cart: any) {

    if (this.editarCantidad.value.cantidad > cart.existencias) {
      this.alert = `Superaste el stock`;
      this.editarCantidad.invalid;
      return;
    }

    if (this.editarCantidad.value.cantidad === 0) {
      this.alert = `No puedes añadir 0 productos`;
      this.editarCantidad.invalid;
      return;
    }

    if (this.editarCantidad.value.cantidad > 0  && this.editarCantidad.value.cantidad < cart.existencias) {
        console.log('Cumple con las condiciones')

        const pedidoEditado = {
           ...cart,
           cantidad:this.editarCantidad.value.cantidad
        }

         this.product = this.CartService.getCartFromLocalStorage().filter((x:any)=>{
              return  x._id !== cart._id
        })

        this.product.push(pedidoEditado);

        this.CartService.editLocalStorage(this.product);
    }


  }

  closeEdit() {
    this.cantidad = false;
  }
}
