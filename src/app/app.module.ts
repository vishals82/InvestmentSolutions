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
  MatCardModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDividerModule
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
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
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
    LogInComponent, AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, MatRadioModule,
    MatStepperModule,
    MatFormFieldModule,MatDividerModule,
    MatInputModule, ChartsModule, SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
