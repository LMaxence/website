import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexPageComponent } from "./pages/index/index-page.component";
import { ProjectsPageComponent } from "./pages/projects/projects-page.component";

const routes: Routes = [
  { path: "", component: IndexPageComponent },
  { path: "projects", component: ProjectsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
