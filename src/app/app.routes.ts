import { Routes } from '@angular/router';
import HomepageComponent from './homepage/homepage.component'
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [{path:"", component:HomepageComponent}, 
    {path:'about', component:AboutComponent}, {path:"register", component:RegisterComponent},
    {path:'login', component:LoginComponent}    
];
