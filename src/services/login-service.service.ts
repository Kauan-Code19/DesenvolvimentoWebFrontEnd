import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { UserResponse } from '../interfaces/user/user-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private endpointLoginURL =  `${environment.apiUrl}login`;

  constructor(private http: HttpClient) { }

  loginUser(userEmail: string, userPassword: string) : Observable<UserResponse> {
    const data = {userEmail, userPassword}

    return this.http.post<UserResponse>(this.endpointLoginURL, data);
  } 
}
