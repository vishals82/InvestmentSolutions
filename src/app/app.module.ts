import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDividerModule, MatTableModule, MatSortModule, MatSnackBarModule, MatSelectModule
} from '@angular/material';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { WelcomeComponent } from './welcome/welcome';
import { RegistrationComponent } from './registration/registration';
import { QuestionairComponent } from './questionair/questionair';
import { ReportComponent } from './report/report';
import { DetailReportComponent } from './detailreport/detailreport';
import { ContactUsComponent } from './contactus/contactus';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './login/login';
import { ChartsModule } from 'ng2-charts';
import { AboutUsComponent } from './aboutus/aboutus';
import { SocialLoginModule, AuthServiceConfig, AuthService } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword';
import { FundSuggestionsComponent } from './fund-suggestions/fund-suggestions';

// let google_client_id = '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com';
// let google_client_id = '529466104931-mfanjdlog1q9gkeial49uqo05979fod4.apps.googleusercontent.com';
let google_client_id = '734265172462-i702p9gcebq1p66s497ls8geomv99vie.apps.googleusercontent.com';
let facebook_client_id = "2194283764212759";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_client_id)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(facebook_client_id)
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    RegistrationComponent,
    QuestionairComponent,
    ReportComponent,
    DetailReportComponent,
    ContactUsComponent,
    LogInComponent, AboutUsComponent,
    ForgotPasswordComponent, FundSuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, MatRadioModule,
    MatStepperModule,
    MatFormFieldModule, MatDividerModule,
    MatInputModule, ChartsModule,
    MatTableModule, MatSortModule, 
    SocialLoginModule, 
    // SocialLoginModule.initialize(new AuthServiceConfig([
    //   {
    //     id: GoogleLoginProvider.PROVIDER_ID,
    //     provider: new GoogleLoginProvider(google_client_id)
    //   },
    //   {
    //     id: FacebookLoginProvider.PROVIDER_ID,
    //     provider: new FacebookLoginProvider(facebook_client_id)
    //   }
    // ])),
    MatSnackBarModule, MatSelectModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
