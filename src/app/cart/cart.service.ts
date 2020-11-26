import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Config } from '../config/server.config';
import { AuthenticationService } from '../login/authenticate.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  public getCart = () => {
    const user: any = this.authenticationService.currentUserValue;
    const id: any = user && user.id ? user.id : '';
    return this.http
      .get<any>(Config.API_URL.concat('cart/list').concat(`/${id}`))
      .pipe(
        map((list) => {
          console.log('cart:::pipe', list);
          if (list != null) {
            return list;
          } else {
            return null;
          }
        })
      );
  };

  public removeCart = (item: any) => {
    return this.http
      .post<any>(Config.API_URL.concat('cart/delete'), {
        id: item.id,
      })
      .pipe(
        map((data) => {
          console.log('cart:::remove:::pipe', data);
          if (data != null) return data;
          else return null;
        })
      );
  };
}
