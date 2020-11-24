import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchproductPage } from './searchproduct.page';

const routes: Routes = [
  {
    path: '',
    component: SearchproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchproductPageRoutingModule {}
