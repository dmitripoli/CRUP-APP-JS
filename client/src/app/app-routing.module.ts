import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "crud",
    loadChildren: "./modules/crud/crud.module#CrudModule"
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
