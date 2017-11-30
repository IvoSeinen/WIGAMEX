import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/components/login/login.component';
import { RegisterComponent } from 'app/components/register/register.component';
import { HeaderComponent } from 'app/components/header/header.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: '',
      children: [ { path: 'login', component: LoginComponent },
                  { path: 'register', component: RegisterComponent },
                ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
