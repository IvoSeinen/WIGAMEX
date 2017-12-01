import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public username = '';
  public password = '';
  public email = '';
  public passwordConfirm: string;
  public serverResponse = '';

  public constructor( private router: Router,
                      private formBuilder: FormBuilder,
                      private RegisterService: RegisterService) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      passwords: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required]
    }, { validator: this.passwordMatch })
    });
  };

  ngOnInit() {
  }

  public passwordMatch(control: AbstractControl) {
    if (control.get('password').value === control.get('passwordConfirm').value) {
      return null;
    } else {
      return {'nomatch': true};
    }
    // return control.get('password').value === control.get('passwordConfirm').value ? null : {'nomatch': true};
  }

  public register() {
    this.RegisterService.register(JSON.stringify({ username: this.username, password: this.password, email: this.email }))
      .then(res => {
        if (res.success) {
          this.serverResponse = 'You have been registered successfully';
          console.log(this.serverResponse);
        } else {
          this.serverResponse = 'Your email has already been registered';
          console.log(this.serverResponse);
        }
      })
      .catch((res) => {
        this.serverResponse = 'The server did not respond to your request';
        console.log(this.serverResponse);
      });
  }
}
