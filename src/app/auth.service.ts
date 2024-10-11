import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://femi.mobihealthinternational.co.uk/v2/login';

  constructor(private http: HttpClient) { }


  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    };

    // Make a POST request to the API
    return this.http.post(this.apiUrl, body);
  }
}
