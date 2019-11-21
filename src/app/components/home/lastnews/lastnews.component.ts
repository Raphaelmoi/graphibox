import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/services/web-service.service';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
    selector: 'app-lastnews',
    templateUrl: './lastnews.component.html',
    styleUrls: ['./lastnews.component.css']
})
export class LastnewsComponent implements OnInit {

    articles: any[] = [];

    qttArticle: number;
    windowWidth: number = window.innerWidth;

    constructor(private ngxXml2jsonService: NgxXml2jsonService,
        private webService: WebServiceService) {

        // determine the quantity of articles to output according to the screen size
        if (this.windowWidth < 768) {
            this.qttArticle = 2;
        } else {
            this.qttArticle = 4
        }
        this.webService.getArticles(this.qttArticle);
        this.articles = this.webService.articles;
    }

    ngOnInit() {
        // console.log(this.articles);
    }

}
