import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapcoTableComponent } from './capco-table/capco-table.component';
import { PaginationComponent } from './pagination-component/pagination-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CapcoTableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
