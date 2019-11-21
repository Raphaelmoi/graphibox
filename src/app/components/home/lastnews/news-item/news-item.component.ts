import { Component, OnInit, Input } from '@angular/core';
import { WebServiceService } from 'src/app/services/web-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-news-item',
    templateUrl: './news-item.component.html',
    styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

    @Input() image: string;
    @Input() title: string;
    @Input() legend: string;
    @Input() id: number;


    constructor(private webService: WebServiceService, private router: Router) { }

    ngOnInit() {
    }

    onViewArticle(id: number) {
        this.router.navigate(['news', 'view', id]);
    }

}
