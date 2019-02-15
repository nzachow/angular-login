import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate(
  	next: ActivatedRouteSnapshot,
  	status: RouterStateSnapshot
	): boolean {
		if (this.auth.isLogged) {
			console.log("Verdadeiramente verdadeiro verdade");	
	  	return true;
		}
		// TODO: Salvar o endereço onde iria, para após login redirecionar de volta
		console.log("Se ralou mermão - Não tava logado");
		this.router.navigate(['/login']);
		return false;
  }
}
