import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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

}
