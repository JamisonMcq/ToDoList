import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../model/list-item';

@Injectable({
  providedIn: 'root',
})
export class AdditemService {
  private addUrl = 'http://localhost:1234/api/';

  constructor(private http: HttpClient) {}

  public addItem(
    title: string,
    description: string,
    doBy: string
  ): Observable<any> {
    const body = {
      title: title,
      description: description,
      doBy: doBy,
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    console.log(body);
    return this.http.post<ListItem>(
      `${this.addUrl}` + 'new',
      body,
      httpOptions
    );
  }
}
