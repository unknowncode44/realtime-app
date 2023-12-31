import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // ruta public nos llevara a la pagina de ingreso o registro, usaremos un public-routes.module para manejar rutas internas.
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(m =>  m.PublicModule)
  },
  // ruta private nos llevara al dashboard, usaremos un private-routes.module para manejar rutas internas.
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then(m =>  m.PrivateModule)
  },
  // ademas redireccionaremos otros endpoint a la ruta public
  {
    path: '**',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
