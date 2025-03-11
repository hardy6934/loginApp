import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { LoginStateDirective } from '../../directives/login-state-directive/login-state.directive';
import { LoginVisibilityDirective } from '../../directives/login-visibility-directive/login-visibility.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login', 
  imports: [LoginStateDirective, LoginVisibilityDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
 
  toggleLogin(): void {
    if (this.authService.getLoginStatus()) {
      this.authService.logout();
    } else {
      this.authService.login().subscribe();
    }
  }
}
