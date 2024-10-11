import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Import the AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';



  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginUser(); // Call the login function when the component initializes
  }

  loginUser(): void {
    const email = 'patient1@mobihealth.healthcare';
    const password = 'Ogogogo1$';

    this.authService.login(email, password).subscribe(
      (response) => {
        console.log('Login successful:', response);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
