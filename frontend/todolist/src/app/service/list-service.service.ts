import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../model/list-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListServiceService {
  private listUrl = 'http://localhost:1234/api/list';
  private addUrl = 'http://localhost:1234/api/new';
  private deleteUrl = 'http://localhost:1234/api';

  constructor(private http: HttpClient) {}

  getList(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(`${this.listUrl}`);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }
}
