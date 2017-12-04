import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface ServerResponse {
  success: boolean;
  message: string;
  token: string;
  username: string;
  city: string;
  cash: number;
  bank_balance: number;
}

@Injectable()
export class PlayerDataService {

  constructor(public http: Http) {

  }

  public getPlayerData(username: string): Observable<any> {
    return this.http.post('http://localhost:3000/PlayerData', {username: username})
      .map((response: Response) => {
        const myResponse: ServerResponse = response.json();
        if (myResponse.success) {
          return myResponse;
        } else {
          return myResponse;
        }
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public updatePlayerData(username: string): Observable<any> {
    return this.http.put('http://localhost:3000/PlayerData', {username: username})
      .map((response: Response) => {

      });
  }
}
