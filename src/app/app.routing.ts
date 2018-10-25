import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import { MisionComponent } from './Mision/index';
import { VisionComponent } from './Vision/index';
import { HomeComponent } from './Home/home.component';
import {ProductoComponent} from './Productos/index';
import { ProductoNewComponent } from './Productos/producto.new.component';

const routes : Routes = [
    {path: '', component: HomeComponent },
    {path: 'mision', component: MisionComponent},
    {path: 'vision', component: VisionComponent},
    {path: 'productos', component: ProductoComponent},
    {path: 'productos/new', component: ProductoNewComponent}
];

export const routing = RouterModule.forRoot(routes);

