import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CrudTableComponent } from "./component/crud-table/crud-table.component";

const routes = [
  {
    path: "",
    component: CrudTableComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: []
})
export class CrudRoutesModule {}
