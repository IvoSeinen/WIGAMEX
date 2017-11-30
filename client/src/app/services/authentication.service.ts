import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface LoginResponse {
  success: boolean;
  message: string;
  poep: string;
}

@Injectable()
export class AuthenticationService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'token': localStorage.getItem('token')},
  );
  private logStatus: boolean;

  constructor(private http: Http) {
  }

  login(data): Promise<any> {
    return this.http.post('http://localhost:3000/login', data, { headers: this.headers })
      .toPromise()
      .then((res: Response) => {
        const myResponse: LoginResponse = res.json();
        if (myResponse.success) {
          this.logStatus = true;
        } else {
          this.logStatus = false;
        }
        return myResponse;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
