import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { MisionComponent } from './Mision/index';
import { VisionComponent } from './Vision/index';
import { ProductoComponent } from './Productos/index';
import { ProductoNewComponent } from './Productos/producto.new.component';
import { HomeComponent }  from './Home/home.component';
import { routing } from './app.routing';

/* Models */

import { Product } from './models/product';


/* Componentes PrimeNg */
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DataViewModule} from 'primeng/dataview';
import { DialogModule }  from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';

/* Firebase Configuration */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule  } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';


/* Services */

import { ProductService } from './services/producto.services';
import { CountryService } from './services/country.service';

/* App Configuration */
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MisionComponent,
    VisionComponent,
    ProductoComponent,
    ProductoNewComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DataViewModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    BrowserModule,
    PanelModule,
    SplitButtonModule,
    AutoCompleteModule,
    CalendarModule,
    FileUploadModule,
    InputTextareaModule,
    DialogModule,
    DropdownModule,
    TabViewModule,
    CodeHighlighterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    routing
  ],
  providers: [
    ProductService,
    CountryService,
    Product
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
