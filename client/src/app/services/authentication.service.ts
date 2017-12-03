import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  username: string;
}

@Injectable()
export class AuthenticationService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'token': localStorage.getItem('token')
  },
  );
  public loginBehaviorSubject = new BehaviorSubject<boolean>(false);
  public logStatus: Observable<boolean> = this.loginBehaviorSubject.asObservable();
  private TOKEN_KEY = 'token';
  private USER_KEY = 'username';
  public token = '';
  public username: string;

  constructor(private http: Http) {
    this.token = this.getToken();
    if (this.token) {
      this.setLogStatus(true);
    } else {
      this.setLogStatus(false);
    }
  }

  login(data): Promise<any> {
    return this.http.post('http://localhost:3000/login', data, { headers: this.headers })
      .toPromise()
      .then((res: Response) => {
        const myResponse: LoginResponse = res.json();
        if (myResponse.success) {
          this.setLogStatus(true);
          // this.loginBehaviorSubject.next(true);
          console.log(myResponse);
          this.token = myResponse.token;
          this.username = myResponse.username;
          console.log('username: ', this.username);
          localStorage.setItem(this.TOKEN_KEY, myResponse.token);
          localStorage.setItem(this.USER_KEY, myResponse.username);
          console.log('user_key: ', localStorage.getItem(this.USER_KEY));
        } else {
          this.setLogStatus(false);
        }
        return myResponse;
      })
      .catch(this.handleError);
  }

  public logout(): void {
    this.token = null;
    this.username  = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.setLogStatus(false);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  public setLogStatus(value: boolean) {
    this.loginBehaviorSubject.next(value);
  }

  private getToken(): string {
    const userToken = localStorage.getItem(this.TOKEN_KEY);
    if (userToken) {
      return userToken;
    } else {
      return null;
    }
  }

  public getLogStatus(): boolean {
    return this.loginBehaviorSubject.getValue();
  }

  public getUsername(): string {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? user : null;
  }
}
