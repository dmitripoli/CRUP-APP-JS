import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule
} from "@angular/material";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
const matImports = [
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule
];
@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, ...matImports],
  exports: [...matImports],
  declarations: []
})
export class MaterialModule {}
