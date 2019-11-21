import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {

  destinataireMail: string;
  sujet: string;
  message: string;
  endpoint: string;
  email: string = '';
  http: HttpClient;

  constructor(http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.http = http;
  }

  ngOnInit( ) {
    
    this.email = this.route.snapshot.params['email'];
    if ( !this.email ){
      this.email = '';
    }
  }

  onSubmit(form: NgForm) {
    // console.log(form.value.name);
    this.destinataireMail = form.value.dest;
    this.sujet = form.value.sujet;
    this.message = form.value.message;

    this.endpoint = "http://localhost/graphibox/src/backend/adminMail.php";
    this.sendEmail();
  }

  sendEmail() {
    let postVars = {
      email: this.destinataireMail,
      sujet: this.sujet,
      message: this.message
    };
    console.log(postVars)
    // Call the php file to send on root for sending mail
    this.http.post(this.endpoint, postVars)
      .subscribe(
        response => console.log(response),
        response => console.log(response)
      )
  }
}
