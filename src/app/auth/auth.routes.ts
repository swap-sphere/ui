import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const AuthRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'login', component: RegisterComponent },
];