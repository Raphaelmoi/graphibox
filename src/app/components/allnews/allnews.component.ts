import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { WebServiceService } from 'src/app/services/web-service.service';

@Component({
    selector: 'app-allnews',
    templateUrl: './allnews.component.html',
    styleUrls: ['./allnews.component.css']
})
export class AllnewsComponent implements OnInit {

    articles: any[] = [];

    constructor(private ngxXml2jsonService: NgxXml2jsonService,
        private webService: WebServiceService) {
        this.webService.getArticles();
        this.articles = this.webService.articles;
    }

    ngOnInit() {
        // console.log(this.webService.idArticleList)
    }

}
