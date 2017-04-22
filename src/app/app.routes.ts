import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';


export const routes: Routes = [
  { path: 'project', component: ProjectComponent },
  { path: 'project/:name', component: ProjectComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);