import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Importe o RouterModule
import { AppRoutingModule } from './app-routing.module'; // Importe o AppRoutingModule

import { AppComponent } from './app.component';
import { ConvemComponent } from './convem/convem.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ,
    RouterModule, // Adicione o RouterModule aqui
    AppRoutingModule // Adicione o AppRoutingModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
