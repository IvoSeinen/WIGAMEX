import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
}

@Injectable()
export class AuthenticationService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'token': localStorage.getItem('token')},
  );
  private loginBehaviorSubject          = new BehaviorSubject<boolean>(false);
  public logStatus: Observable<boolean> = this.loginBehaviorSubject.asObservable();

  constructor(private http: Http) {
  }

  login(data): Promise<any> {
    return this.http.post('http://localhost:3000/login', data, { headers: this.headers })
      .toPromise()
      .then((res: Response) => {
        const myResponse: LoginResponse = res.json();
        if (myResponse.success) {
          this.setLogStatus(true);
          console.log(myResponse.token);
        } else {
          this.setLogStatus(false);
        }
        return myResponse;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  public setLogStatus(value: boolean) {
    this.loginBehaviorSubject.next(value);
  }

  public getLogStatus(): boolean {
    return this.loginBehaviorSubject.getValue();
  }
}
