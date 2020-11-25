import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Config } from '../config/server.config';

const createUrl = `${Config.API_URL}product/create`;

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private httpClient: HttpClient) { }
    create(data:any): Observable<any> {
        return this.httpClient.post(createUrl, data);
      }
}