import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ViewComponent} from './view/view.component';
import {CardComponent} from './card/card.component';

const routes: Routes = [
  { path: 'share/:id', component: CardComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
  
})




export class AppRoutingModule {}

