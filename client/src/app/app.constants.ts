import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Globals {
    public static apiHost: 'http://localhost:3000/';
    public static apiPrefix: 'api';
}