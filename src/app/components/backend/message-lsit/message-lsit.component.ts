import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-message-lsit',
    templateUrl: './message-lsit.component.html',
    styleUrls: ['./message-lsit.component.css']
})
export class MessageLsitComponent implements OnInit {

    http: HttpClient;
    deleteBox: boolean = false;

    messages: any[] = [];
    constructor(http: HttpClient, private router: Router, private route: ActivatedRoute) {
        this.http = http;
    }

    ngOnInit() {
        this.getMessages();
    }

    getMessages() {
        this.messages = [];
        this.getMessagesFromServer().subscribe(data => {
            let jsonObj = JSON.parse(data);
            for (let i = 0; i <= jsonObj.length; i++) {
                if (jsonObj[i]) {
                    this.messages.push(jsonObj[i]);
                };
            }
        });
    }

    getMessagesFromServer() {
        let url = "http://localhost/graphibox/src/backend/getMessages.php";
        return this.http.get(url, { responseType: 'text' });
    }

    onAnswer(mail) {
        this.router.navigate(['control', 'mail', mail]);
    }

    onDelete(id) {
        let url = "http://localhost/graphibox/src/backend/deleteMsg.php?id=" + id;
        // Call the php file to send on root for sending mail
        this.http.post(url, id)
            .subscribe(
                response => {
                    // console.log(response)
                    this.deleteBox = true;
                    this.getMessages();
                },
                // response => console.log(response)
            )
    }
}
