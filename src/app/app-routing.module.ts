import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './pages/index/index-page.component';
import { ProjectPageComponent } from './pages/project/project-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'project/:projectId', component: ProjectPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
