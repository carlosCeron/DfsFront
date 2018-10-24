import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MisionComponent } from './Mision/index';
import { VisionComponent } from './Vision/index';
import { ProductoComponent } from './Productos/index';
import { routing } from './app.routing';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    MisionComponent,
    VisionComponent,
    ProductoComponent
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    BrowserModule, 
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
