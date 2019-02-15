import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    isLogged = false;

    // endpoint = "https://jsonplaceholder.typicode.com/posts/1";
    endpoint = "https://reqres.in/api/login";

	constructor(private http: HttpClient) { }

    login(user: string, password: string): Observable<boolean> {
        console.log("u ", user, "p ", password);
        return this.http.post(this.endpoint, {email: user, password: password}).
            pipe(map(resp => {
                console.log("resp ", resp);
                if (resp["token"] != undefined) {
                    localStorage.setItem("token", resp['token']);
                    this.isLogged = true;
                    return true;
                }
                this.isLogged = false;
                return false;
		}));
	}
}
