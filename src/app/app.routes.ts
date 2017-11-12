import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'project/:name', component: ProjectComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);