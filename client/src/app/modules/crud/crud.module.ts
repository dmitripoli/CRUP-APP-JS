import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CrudTableComponent } from "./component/crud-table/crud-table.component";
import { CrudRoutesModule } from "./crud-routs.module";
import { CrudService } from "./crud.service";
import { MaterialModule } from "../material/material.module";
import { CrudItemComponent } from "./component/crud-item/crud-item.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    CrudRoutesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CrudService],
  entryComponents: [CrudItemComponent],
  declarations: [CrudTableComponent, CrudItemComponent]
})
export class CrudModule {}
