import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-crud-item",
  templateUrl: "./crud-item.component.html",
  styleUrls: ["./crud-item.component.scss"]
})
export class CrudItemComponent implements OnInit {
  formData: FormGroup = null;
  dataProps: string[];
  constructor(
    public dialogRef: MatDialogRef<CrudItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    const formGroup = {};
    this.dataProps = Object.keys(this.data.data);
    for (let prop of Object.keys(this.data.data)) {
      formGroup[prop] = new FormControl(this.data.data[prop] || "");
    }
    this.formData = new FormGroup(formGroup);
    console.log(this.formData.getRawValue());
  }

  Cancel(): void {
    this.dialogRef.close();
  }

  closeDialog() {
    this.data.data = this.formData.getRawValue();
    this.data && this.dialogRef.close(this.data);
  }
}
