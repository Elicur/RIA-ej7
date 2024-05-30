import { Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { HospitalesNuevoComponent } from './hospitales-nuevo/hospitales-nuevo.component';
import { HospitalesEditarComponent } from './hospitales-editar/hospitales-editar.component';

export const routes: Routes = [
    { path: 'componente1', component: Componente1Component },
    { path: 'componente2', component: Componente2Component },
    { path: 'hospitales', component: HospitalesComponent },
    { path: 'hospitales-nuevo', component: HospitalesNuevoComponent },
    { path: 'hospitales-editar/:id', component: HospitalesEditarComponent }
];