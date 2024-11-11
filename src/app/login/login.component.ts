import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Login$Params} from '../api/maya/api/mayacomposite-api/fn/login-controller/login';
import {LoginControllerService} from '../api/maya/api/mayacomposite-api/services/login-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginControllerService, private router: Router) {}

  onSubmit() {
    const loginParams: Login$Params = {
      body: { email: this.email, password: this.password }
    };

    this.loginService.login(loginParams).subscribe(
      (response: string) => { // Specify that the response is a string
        console.log('Login successful:', response);
        localStorage.setItem('token', response); // Store the token as a string
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Login failed: Please check your credentials and try again.');
      }
    );
  }


}
