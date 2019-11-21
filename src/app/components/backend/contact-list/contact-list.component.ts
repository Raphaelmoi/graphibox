import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

    http: HttpClient;

    messages: any[] = [];
    constructor(http: HttpClient) {
        this.http = http;
    }

    ngOnInit() {
        this.getMessages().subscribe(data => {
            let jsonObj = JSON.parse(data);
            for (let i = 0; i <= jsonObj.length; i++) {
                if (jsonObj[i]) {
                    this.messages.push(jsonObj[i]);
                };
            }
            // console.log(this.messages)
        });
    }
    getMessages() {
        let url = "http://localhost/graphibox/src/backend/getMessages.php";
        return this.http.get(url, { responseType: 'text' });
    }
}
