import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/security/components/login/login.component';
import { ClientComponent } from './modules/clients/components/client/client.component';

import { DashboardComponent } from './modules/administration/components/dashboard/dashboard.component';
import { AgregarTareaComponent } from './modules/administration/components/agregar-tarea/agregar-tarea.component';
import { InventarioComponent } from './modules/administration/components/inventario/inventario.component';
import { TareaPendienteComponent } from './modules/administration/components/tarea-pendiente/tarea-pendiente.component'; 
import { VerificacionesComponent } from './modules/administration/components/verificaciones/verificaciones.component'; 
import { VerificacionDetallesComponent } from './modules/administration/components/verificacion-detalles/verificacion-detalles.component'; 

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'client', component: ClientComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },

    
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'agregar-tarea', component: AgregarTareaComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'tarea-pendiente', component: TareaPendienteComponent },
    { path: 'verificaciones',  component: VerificacionesComponent},
    { path: 'verificacion-detalles', component: VerificacionDetallesComponent },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },





];
