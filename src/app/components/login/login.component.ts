import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    logged: boolean = false;
    authenticating: boolean = false;
    loginError: boolean = false;
    loginForm = new FormGroup({
        email: new FormControl('', [ Validators.required]),
        password: new FormControl('', [ Validators.required]),
    });

    constructor(private auth: AuthenticationService) { }

    ngOnInit() {
    }

    clickLogin() {
        this.authenticating = true;
        if ( this.loginForm.valid ) {
            this.auth.login(this.loginForm.value["email"], this.loginForm.value["password"]).subscribe(
                resp => {
                    this.logged = resp;
                    this.loginError = false;
                },
                error => {
                    console.log("erro ao autenticar");
                    this.logged = false;
                    this.loginError = true;
                }
            );
        } else {
            this.logged = false;
            this.loginError = true;
        }
        this.authenticating = false;
    }

}
