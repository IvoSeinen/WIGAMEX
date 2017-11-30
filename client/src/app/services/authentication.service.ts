import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {

  }

  public login() {

  }

  // public login(username: string, password: string): Observable<any> {
  //   return this.http.post( {username:username, password:password})
  // }

}
