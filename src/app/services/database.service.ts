import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly APIurl = "http://localhost:49885/api";

  constructor(private http:HttpClient) { }

  get():Observable<any[]>{
    return this.http.get<any>(this.APIurl + "/TB_Cortes")
  }
}
