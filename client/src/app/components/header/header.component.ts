import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  welcomeMessage = '';

  constructor(private router: Router,
    private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.authenticationService.logStatus.subscribe(value => {
      if (value) {
        this.welcomeMessage = this.authenticationService.getUsername();
      } else {
        this.welcomeMessage = '';
      }
    });
    // TODO: add logic to show/hide the login/signup or the avatar
  }

  public goToHomePage() {
    this.router.navigate(['./']);
  }

  public goToLoginPage() {
    this.router.navigate(['./login']);
  }

  public goToRegisterPage() {
    this.router.navigate(['./register']);
  }

  public logout() {
    if (this.isLoggedIn()) {
      this.authenticationService.logout();
      this.router.navigate(['./']);
    }
  }

  isLoggedIn() {
    return this.authenticationService.getLogStatus();
  }
}
