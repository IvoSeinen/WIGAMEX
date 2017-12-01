import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public username: string;
  public email: string;
  public password: string;
  public passwordConfirm: string;

  public constructor(private formBuilder: FormBuilder) {
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
    console.log(this.password, this.passwordConfirm);
  }

}
