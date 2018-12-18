import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './/app-routing.module';
import { ViewComponent } from './view/view.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
