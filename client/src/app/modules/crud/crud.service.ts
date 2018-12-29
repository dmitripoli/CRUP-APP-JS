import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CrudMode } from "./crud.model";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators/map";
const baseUrl = "contact";
@Injectable()
export class CrudService {
  constructor(private http: HttpClient) {}

  get(id = "") {
    return this.http
      .get(`/${baseUrl}/get/${id}`)
      .pipe(map((res: any) => res.data));
  }

  delete(id = "") {
    return this.http
      .delete(`/${baseUrl}/delete/${id}`)
      .pipe(map((res: any) => res.data));
  }

  put(data) {
    return this.http
      .put(`/${baseUrl}/update/${data._id}`, data)
      .pipe(map((res: any) => res.data));
  }

  post(data) {
    return this.http
      .post(`/${baseUrl}/create`, data)
      .pipe(map((res: any) => res.data));
  }
}
