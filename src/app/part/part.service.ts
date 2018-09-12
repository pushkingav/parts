import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Part} from '../models/part.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PartService {
  constructor(private http: HttpClient) {}
  // private userUrl = 'http://localhost:8080/user-portal/user';
  private partsUrl = '/api';

  public getParts() {
    return this.http.get<Part[]>(this.partsUrl);
  }

  public deletePart(part) {
    return this.http.delete(this.partsUrl + '/' + part.id);
  }

  public createPart(part) {
    return this.http.post<Part>(this.partsUrl, part);
  }

  public editPart(part) {
    return this.http.put<Part>(this.partsUrl, part);
  }

  public getInStockCount() {
    return this.http.get(this.partsUrl + '/instock')
  }
}
