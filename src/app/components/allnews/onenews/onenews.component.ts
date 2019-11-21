import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/services/web-service.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-onenews',
    templateUrl: './onenews.component.html',
    styleUrls: ['./onenews.component.css']
})
export class OnenewsComponent implements OnInit {
    article: any[] = [];
    id: any;

    constructor( private webService: WebServiceService, private router: Router, private route: ActivatedRoute) {
        this.webService.getArticles();
        this.id = this.route.snapshot.params['id'];
        this.article = this.webService.getSingleArticle(this.id);
    }

    ngOnInit() {
    }

    onNextArticle(direction) {
        let nextId = this.webService.getNextId(this.id, direction);
        this.router.navigateByUrl('/news/view', { skipLocationChange: true }).then(() => {
            this.router.navigate(['news', 'view', nextId]);
        });
    }

    ngOnDestroy() {
    }

}
