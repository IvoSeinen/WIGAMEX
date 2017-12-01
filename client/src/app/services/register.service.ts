import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { LoginResponse } from 'app/services/authentication.service';

@Injectable()
export class RegisterService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    },
  );

  constructor(private http: Http) {

  }

  register(data): Promise<any> {
    return this.http.post('http://localhost:3000/register', data, { headers: this.headers })
      .toPromise()
      .then((res: Response) => {
        const myResponse: LoginResponse = res.json();
        return myResponse;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
