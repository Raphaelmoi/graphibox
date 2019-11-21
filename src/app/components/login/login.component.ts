import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    name: string;
    password: string;
    endpoint: string;

    http: HttpClient;

    constructor(http: HttpClient, private router: Router, private authService: AuthGuardService) {
        this.http = http;
    }

    ngOnInit() {
        //skip the view if already connected
        if (window.sessionStorage.getItem('connect') == 'true') {
            this.router.navigate(['control', 'message']);
        }
    }

    onSubmit(form: NgForm) {
        this.name = form.value.name;
        this.password = form.value.pass;

        this.endpoint = "http://localhost/graphibox/src/backend/logIn.php";
        this.connect();
    }

    connect() {
        let postVars = {
            name: this.name,
            password: this.password,
        };

        this.http.post(this.endpoint, postVars)
            .subscribe(
                response => {
                    window.sessionStorage.setItem('connect', JSON.stringify(response));
                    this.router.navigate(['control', 'message']);
                }
            );
    }
}
