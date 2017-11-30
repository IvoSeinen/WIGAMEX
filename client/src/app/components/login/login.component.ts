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
  public errormessage = '';

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

  public login() {
    this.authenticationService.login(JSON.stringify({ username: this.username, password: this.password }))
      .then(res => {
        if (res.success) {
          this.errormessage = res.message;
          console.log(this.errormessage);
          this.router.navigate(['/home']);
        } else {
          this.errormessage = res.message;
          console.log(this.errormessage);
        }
      })
      .catch((res) => {
        this.router.navigate(['/login']);
      });
  }
}
