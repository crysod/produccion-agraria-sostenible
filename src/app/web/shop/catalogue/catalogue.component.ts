import { Component, OnInit, OnDestroy } from '@angular/core';

// Services
import { CatalogueService } from "../../../core/services/web/catalogue/catalogue.service";
import { ProductsService } from "../../../core/services/web/products/products.service";
import { CatalogueProductsService } from "../../../core/services/web/catalogue/products/catalogue-products.service";
import { CartService } from 'src/app/core/services/web/cart/cart.service';

// Models
import { Products } from "../../../core/models/web/products/class/product.class";

// Ngrx
import { Store } from '@ngrx/store';
import { AppState } from "../../../../app/app.state";
import { Catalogue } from 'src/app/core/models/web/catalogue/class/catalogues.class';
import * as CatalogueActions from "../../../global/ngrx/web/catalogue/catalogue.actions";
import * as ProductActions from "../../../global/ngrx/web/products/products.actions";

// Rxjs
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit, OnDestroy {

  public catalogue: Catalogue[] = [];
  public products: Products[] = [];
  public StoreProduct!: Subscription;
  public StoreCatalogue!: Subscription;
  public parametro!:string;
  public parametroBusqueda:any;
  public productoCatalogo!:number;

  constructor(public _CatalogueService: CatalogueService,
    public _CatalogueProductsService: CatalogueProductsService,
    private _ProductsService: ProductsService,
    private store: Store<AppState>,
    public CartService:CartService) {

     }

  ngOnInit(): void {
    this.getFromServiceCatalogueWeb();
    this.getFromServiceProductWeb();
    this.getNgrxStoreCatalogue();
    this.getNgrxStoreProduct();
  }

  getFromServiceCatalogueWeb() {
    return this._CatalogueService.getCatalogueFromWeb().subscribe({
      next: (data: any) => {
        if (this.catalogue.length > 0) {
          return;
        }
        this.setNgrxStoreCatalogue(data.response)

      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  getFromServiceProductWeb(): any {
    return this._ProductsService.getProductFromWeb().subscribe({
      next: (data: any) => {
        if (this.products.length > 0) {
          return;
        }

        this.setNgrxStoreProduct(data.response);
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  getFromServiceProductFromCatalogue(id: string) {
    this._CatalogueProductsService.getCatalogueFromWeb(id).subscribe({
      next: (data: any) => {

          if(data.response.length == 0){
             this.parametro = "";
             this.parametroBusqueda = 1;
             this.productoCatalogo = data.response.length;
             this.store.dispatch(ProductActions.unsetNewProducts({products:[]}))
             return;
          }
          this.parametro = "";
          this.parametroBusqueda = 1;
          this.productoCatalogo = data.response.length;
          this.store.dispatch(ProductActions.unsetNewProducts({products:[]}))
          this.setNgrxStoreProduct(data.response);

      },
      error: (error: any) => {
          console.log(error)
      }
    })
  }

  searcheResult(event:string){
     this.parametro = event;
  }

  getConsultLength(event:string){
     this.parametroBusqueda = event;
  }


  setNgrxStoreCatalogue(data: Array<Object> | any) {
    for (const iterator of data) {
      this.store.dispatch(CatalogueActions.SetAll(iterator))
    }
  }

  setNgrxStoreProduct(data: Array<Object> | any) {
    for (const iterator of data) {
      this.store.dispatch(ProductActions.SetAll(iterator))
    }
  }

  getNgrxStoreCatalogue(): any {
    return this.store.select('catalogue').subscribe((catalogue) => { this.catalogue = catalogue; })
  }

  getNgrxStoreProduct(): any {
    return this.store.select('product').subscribe(product => {this.products = product;})
  }

  ngOnDestroy(): void {

  }
}
