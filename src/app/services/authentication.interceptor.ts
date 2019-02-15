import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = localStorage.getItem("token");
    if ( token != null ) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ` + token
          }
        });
        console.log("add token");
    } else {
        console.log("não add token");
    }

    return next.handle(request);
  }
}
