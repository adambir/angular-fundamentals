import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  password: any;
  userName: any;

  constructor(private authService: AuthService, private router: Router) {}

  login(formValue) {
    this.authService.loginUser(formValue.userName, formValue.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
