import { Component } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { UserService } from './userService';
import { SnackBar } from './snackbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'investmentsolutions';

  constructor(private authService: AuthService,
    private userService: UserService, private router: Router,
    private snackBar: SnackBar) { }
    
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
        if (user != null) {
            console.log('Logged In', user.name);
            this.userService.user = user;
            this.userService.loggedIn = (user != null);
            this.snackBar.show(`Welcome ${this.userService.user.name}`);
            this.router.navigate(['./home']);
        }
    });
}
}
