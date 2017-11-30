import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  public loginForm: FormGroup;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder) {
                this.loginForm = formBuilder.group({
                'username': [null],
                'password': [null],
                });
  }

  ngOnInit() {
  }

  public login(username: string, password: string) {

  }


  // public login(username: string, password: string) {
  //   this.authenticationService.login(username, password)
  //     .subscribe(result => {
  //       if (result) {
  //         this.router.navigate(['./home']);
  //         console.log(result);
  //       }
  //   });
  // }
}
