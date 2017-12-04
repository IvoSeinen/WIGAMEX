import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
import { GetPlayerDataService } from 'app/services/get-player-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public cash: number;
  public bankBalance: number;
  public username = '';
  public city: string;

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private getPlayerDataService: GetPlayerDataService) {
  }

  ngOnInit() {
    this.authenticationService.logStatus.subscribe(value => {
      if (value) {
        this.username = this.authenticationService.getUsername();
      } else {
        this.username = null;
      }
    });
    this.getPlayerData(this.username);
  }

  public getPlayerData(username: string) {
    this.getPlayerDataService.getPlayerData(username)
      .subscribe(myResponse => {
        if (myResponse.success) {
          this.cash = myResponse.cash;
          this.bankBalance = myResponse.bank_balance;
          this.city = myResponse.city;
        } else {

        }
      });
  }

  public addCash(username: string) {
    this.getPlayerDataService.getPlayerData(username)
      .subscribe(myResponse => {
        
      });
  }
}
