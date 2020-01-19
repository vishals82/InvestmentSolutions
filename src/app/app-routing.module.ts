import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome';
import { QuestionairComponent } from './questionair/questionair';
import { ContactUsComponent } from './contactus/contactus';
import { RegistrationComponent } from './registration/registration';
import { ReportComponent } from './report/report';
import { DetailReportComponent } from './detailreport/detailreport';
import { LogInComponent } from './login/login';
import { AboutUsComponent } from './aboutus/aboutus';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: WelcomeComponent },
  { path: 'questionair', component: QuestionairComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'report', component: ReportComponent },
  { path: 'detail-report', component: DetailReportComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'login', component: LogInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
