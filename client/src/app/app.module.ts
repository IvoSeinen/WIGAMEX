import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundComponent } from './components/background/background.component';
import { AuthenticationService } from './services/authentication.service';
import { GetPlayerDataService } from './services/get-player-data.service';
import { Http, Response, Headers} from '@angular/http';
import { RegisterService } from 'app/services/register.service';
import { SuccesRegistrationComponent } from './components/succes-registration/succes-registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/authGuard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HeaderComponent,
    BackgroundComponent,
    SuccesRegistrationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthenticationService,
    GetPlayerDataService,
    RegisterService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
