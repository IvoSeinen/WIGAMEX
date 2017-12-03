import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
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
  public errormessage = '';

  public constructor( private router: Router,
                      private authenticationService: AuthenticationService,
                      private formBuilder: FormBuilder) {
                        this.loginForm = formBuilder.group({
                        'username': [null, Validators.required],
                        'password': [null, Validators.compose([Validators.required])],
  });
}

  ngOnInit() {
  }

  public login(username: string, password: string) {
    // for now it is navigating to home
    this.authenticationService.login(username, password)
      .subscribe(myResponse => {
        if (myResponse.success) {
          this.router.navigate(['./dashboard']);
        } else {
          this.errormessage = myResponse.message;
        }
      });
  }
}
