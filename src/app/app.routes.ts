import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"bienvenida",
        pathMatch:"full"
    },
    {
        path:"bienvenida",
        loadComponent: ()=>import ("../pages/bienvenida/bienvenida").then((module) =>module.Bienvenida)
    },
    {
        path:"login",
        loadComponent: ()=>import ("../pages/login/login").then((module) =>module.Login)
    },
    {
        path:"registro",
        loadComponent: ()=>import ("../pages/registro/registro").then((module) =>module.Registro)
    },
    {
        path:"sobre-mi",
        loadComponent: ()=>import ("../pages/sobre-mi/sobre-mi").then((module) =>module.SobreMi)
    },
    {
        path:"**",
        loadComponent: ()=>import ("../pages/error/error").then((module) =>module.Error)
    }
];
