import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '../interfaces/user/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpointUserURL = `${environment.apiUrl}user`

  constructor(private http: HttpClient) { }

  createUser(name: string, email: string, password: string) : Observable<UserResponse> {
    const data = {name, email, password}

    return this.http.post<UserResponse>(this.endpointUserURL, data);
  }
}