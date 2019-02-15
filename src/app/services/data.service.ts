import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../structures/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	// SINGLE USER
	endpoint = "https://reqres.in/api/users/";

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<User>{
  	return this.http.get<User>(this.endpoint + id);
  }
}
