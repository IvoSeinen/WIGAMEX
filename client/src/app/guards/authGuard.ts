import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    public constructor(private router: Router) {
    }

    public canActivate(): boolean {
        if (localStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }
}