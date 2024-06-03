import { Routes } from '@angular/router';
import { ProjectListComponent } from './projects/project-list/project-list.component';

export const routes: Routes = [
    { path:'', component: ProjectListComponent },
    { path: 'projects', component: ProjectListComponent }
];
