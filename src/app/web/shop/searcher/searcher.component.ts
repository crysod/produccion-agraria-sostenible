import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// Services
import { SearcherService } from "../../../core/services/web/searcher/searcher.service";

// Ngrx
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as Actions from 'src/app/global/ngrx/web/products/products.actions';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  public formSearch!: FormGroup;

  @Output() product = new EventEmitter;
  @Output() productLenght = new EventEmitter;

  constructor(private FormBuilder: FormBuilder,
              private SearcherService: SearcherService,
              public store:Store<AppState>) {
    this.formSearch = this.FormBuilder.group({
      product: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]+$")]]
    })
  }

  ngOnInit(): void {
  }


  searchProductOnWeb() {
    if (!this.formSearch.valid) {
      return;
    }

    this.SearcherService.getProductFromSearcherWeb(this.formSearch.value.product).subscribe({
      next: (data:any) => {
             if(data.response.length === 0){
                this.product.emit(this.formSearch.value.product);
                this.productLenght.emit(data.response.length);
                this.store.dispatch(Actions.unsetNewProducts({products:[]}))
                this.formSearch.reset();
                return;
             }
             this.product.emit(this.formSearch.value.product);
             this.productLenght.emit(data.response.length);
             this.store.dispatch(Actions.unsetNewProducts({products:[]}))
             this.setNgrxStoreProduct(data.response);
             this.formSearch.reset();
             return;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  setNgrxStoreProduct(data: Array<Object> | any) {
    for (const iterator of data) {
      this.store.dispatch(Actions.SetAll(iterator))
    }
  }

}
