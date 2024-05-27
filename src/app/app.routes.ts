import { Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';

export const routes: Routes = [
    {path:'', component:MainpageComponent},
    {path:'**', component:MainpageComponent},
];
