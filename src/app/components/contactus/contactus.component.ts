import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-contactus',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

    email: string;
    name: string;
    tel: number;
    subject: string;
    message: string;
    endpoint: string;

    http: HttpClient;
    mailSend: boolean = false;

    constructor( http: HttpClient ) {
        this.http = http;
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        // console.log(form.value.name);
        this.email = form.value.mail;
        this.name = form.value.name;
        this.tel = form.value.tel;
        this.subject = form.value.subject
        this.message = form.value.message;

        this.endpoint = "http://localhost/graphibox/src/backend/postMail.php";
        this.sendEmail(form);
    }

    sendEmail(form) {
        let postVars = {
            email: this.email,
            name: this.name,
            tel: this.tel,
            subject: this.subject,
            message: this.message
        };
        // console.log(postVars)
        // Call the php file to send on root for sending mail
        this.http.post(this.endpoint, postVars)
            .subscribe(
                response => {
                    console.log(response);
                    this.mailSend = true;
                    form.reset();
                }
            )
    }
}
