import { Component, OnInit, OnDestroy } from "@angular/core";
import { CrudService } from "../../crud.service";
import {
  MatTableDataSource,
  MatTable,
  MatDialog,
  Sort
} from "@angular/material";
import { ViewChild } from "@angular/core";
import { CrudItemComponent } from "../crud-item/crud-item.component";
import { Subject } from "rxjs/Subject";
import { takeUntil, filter } from "rxjs/operators";
import { switchMap } from "rxjs/operators";

import * as _ from "lodash";
@Component({
  selector: "app-crud-table",
  templateUrl: "./crud-table.component.html",
  styleUrls: ["./crud-table.component.scss"]
})
export class CrudTableComponent implements OnInit, OnDestroy {
  public dataArray: any = null;
  public displayedColumns: string[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public columnNames = [
    {
      header: "First Name",
      property: "firstName"
    },
    {
      header: "Last Name",
      property: "lastName"
    },
    {
      header: "Email",
      property: "email"
    },
    {
      header: "Company",
      property: "company"
    },
    {
      header: "Phone",
      property: "phone"
    },
    {
      header: "Created Date",
      property: "created_date"
    }
  ];
  @ViewChild("table")
  table: MatTable<any>;

  constructor(private crudService: CrudService, public dialog: MatDialog) {}

  ngOnInit() {
    this.crudService.get().subscribe(
      (res: any) => {
        this.dataArray = new MatTableDataSource(res);
      },
      err => {
        console.log(err);
      }
    );
    this.displayedColumns = this.columnNames.map(x => x.property);
    this.displayedColumns.push("actionsColumn");
  }

  createNew() {
    const itemProperties = _.cloneDeep(this.displayedColumns);
    itemProperties.pop();
    let newObjectData = {};
    itemProperties.map(p => (newObjectData[p] = ""));
    const dialogRef = this.dialog.open(CrudItemComponent, {
      width: "50%",
      data: {
        actionTitle: "Create new item",
        data: newObjectData
      }
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(result => {
        if (result && result.data) {
          this.crudService.post(result.data).subscribe(
            (res: any) => {
              this.dataArray.data.push(res);
              this.table.renderRows();
            },
            err => {
              console.log(err);
            }
          );
        }
      });
  }

  delete(data) {
    const id = data._id;
    this.crudService.delete(id).subscribe(
      res => {
        _.remove(this.dataArray.data, { _id: id });
        this.table.renderRows();
      },
      err => {
        console.log(err);
      }
    );
  }

  edit(data) {
    const dialogRef = this.dialog.open(CrudItemComponent, {
      width: "50%",
      data: {
        actionTitle: "Edit Item",
        data
      }
    });
    dialogRef
      .afterClosed()
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter(item => !!item)
      )
      .subscribe(
        result => {
          this.crudService.put(result.data).subscribe((res: any) => {
            const editedItemIndex = this.dataArray.data.findIndex(
              item => item._id === res._id
            );
            this.dataArray.data[editedItemIndex] = res;
            this.table.renderRows();
          });
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
