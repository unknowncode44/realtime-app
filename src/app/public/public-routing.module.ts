import { RouterModule, Routes   } from "@angular/router";
import { NgModule               } from "@angular/core";
import { LoginComponent         } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";


const routes: Routes = [
    // definimos las rutas de public
    {
        // ruta a login
        path    : 'login',
        component: LoginComponent
    },
    {
        // ruta a registro
        path     : 'register',
        component: RegisterComponent
    },
    // definimos redireccion en caso de que se ingrese mal el URL, redirecciona siempre a login
    {
        path       : '**',
        pathMatch  : 'full',
        redirectTo : 'login'
    }

]

@NgModule(({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}))
export class PublicRoutingModule {}