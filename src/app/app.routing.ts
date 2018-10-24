import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import { MisionComponent } from './Mision/index';
import { VisionComponent } from './Vision/index';
import {ProductoComponent} from './Productos/index';

const routes : Routes = [
    {path: '', component: AppComponent },
    {path: 'mision', component: MisionComponent},
    {path: 'vision', component: VisionComponent},
    {path: 'productos', component: ProductoComponent}
];

export const routing = RouterModule.forRoot(routes);

