import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getAllUsers() : Observable<UserResponse[]> {
    const url = `${this.endpointUserURL}/all`

    return this.http.get<UserResponse[]>(url);
  }

  getUser(userId: string) : Observable<UserResponse> {
    const url = `${this.endpointUserURL}/${userId}`;

    return this.http.get<UserResponse>(url);
  }

  updateUser
  (
    userId: string, name: string, email: string, password: string
  ) : Observable<UserResponse>
  {
    const url = `${this.endpointUserURL}/${userId}`;
    const data = {name, email, password}

    return this.http.put<UserResponse>(url, data);
  }

  deleteUser(userId: string) : Observable<any> {
    const url = `${this.endpointUserURL}/${userId}`;

    return this.http.delete<any>(url);
  }
}
