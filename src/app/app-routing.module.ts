import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MAIN = "/index";

const routes: Routes = [
   {
    path:'',redirectTo: MAIN, pathMatch: 'full'
   },{
    path:'',
    loadChildren:()=>import('./web/web.module').then(m=>m.WebModule)
   },
   {
    path:'**', redirectTo: MAIN
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
