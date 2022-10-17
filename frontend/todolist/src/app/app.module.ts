import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListitemComponent } from './listitem/listitem.component';
import { AppRoutingModule } from './app-routing.module';
import { AdditemComponent } from './additem/additem.component';

@NgModule({
  declarations: [
    AppComponent,
    ListitemComponent,
    AdditemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
