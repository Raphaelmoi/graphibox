import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceService } from 'src/app/services/web-service.service';

@Component({
    selector: 'app-allnews-item',
    templateUrl: './allnews-item.component.html',
    styleUrls: ['./allnews-item.component.css']
})
export class AllnewsItemComponent implements OnInit {

    @Input() image: string;
    @Input() title: string;
    @Input() legend: string;
    @Input() id: number;
    @Input() datePublication: string;
    @Input() article: string;
    @Input() nextId: number;
    @Input() previousId: number;
    @Input() i: number;

    constructor(private router: Router, private webService: WebServiceService) {
    }

    ngOnInit() {
    }

    convertIsoDate(datePublication) {
        return new Date(datePublication);
    }

    getText() {
        let value;
        value = htmlToPlaintext(this.article);
        function htmlToPlaintext(text) {
            return text ? String(text).replace(/<[^>]+>/gm, '<div></div>') : '';
        }
        value = value.substr(0, 200);
        return value += '...';
    }

    onViewArticle(id: number, i: number) {
        this.router.navigate(['news', 'view', id]);
    }

}
