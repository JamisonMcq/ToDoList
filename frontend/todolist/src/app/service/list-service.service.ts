import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../model/list-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private listUrl = 'http://localhost:1234/api/list';
  private addUrl = 'http://localhost:1234/api/new';

  constructor(private http: HttpClient) { }

  getList(): Observable<ListItem[]>{
    return this.http.get<ListItem[]>(`${this.listUrl}`)
  }

  // addItem(): Observable<ListItem[]>{
  //   return this.http.post<ListItem[]>(`${this.addUrl}`)
  // }
}
