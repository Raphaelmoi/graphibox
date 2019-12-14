import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
    providedIn: 'root'
})
export class WebServiceService {
    apikey: string = "APIKEY";
    urlListArticle: string = "https://ws-gbbu02.graphibox.eu/WebService.asmx/GetArticles?pKey="
    urlSingleArticle: string = "https://ws-gbbu02.graphibox.eu/WebService.asmx/GetArticle?pKey="
    urlImage: string = 'https://cdn-gbbu02.graphibox.eu/pub/1/medias/articles/';

    articles: any[] = [];
    idArticleList: any = [];

    constructor(private http: HttpClient, private ngxXml2jsonService: NgxXml2jsonService, ) {
    }

    getArticles(qtt: number = 64) {
        this.idArticleList = [];
        this.articles = [];
        this.getArticlesFromServer(qtt).subscribe(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'text/xml');
            const obj = this.ngxXml2jsonService.xmlToJson(xml);
            let jsonObj = JSON.parse(obj['string']);
            for (let i = 0; i <= jsonObj.length; i++) {
                if (jsonObj[i]) {
                    this.idArticleList.push(jsonObj[i].idA);
                    this.articles.push(jsonObj[i]);
                };
            }
        });
    }

    getSingleArticle(id: number) {
        let article: any = [];

        this.getSingleArticleFromServer(+id).subscribe(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'text/xml');
            const obj = this.ngxXml2jsonService.xmlToJson(xml);
            let jsonObj = JSON.parse(obj['string']);
            for (let i = 0; i <= jsonObj.length; i++) {
                if (jsonObj[i]) {
                    article.push(jsonObj[i]);
                };
            }
        });
        return article;
    }

    getArticlesFromServer(nbItems: number = 1) {
        let url = this.urlListArticle + this.apikey + '&pNbItems=' + nbItems;
        return this.http.get(url, { responseType: 'text' });
    }
    getSingleArticleFromServer(id: number) {
        let url = this.urlSingleArticle + this.apikey + '&pId=' + id;
        return this.http.get(url, { responseType: 'text' });
    }

    imageUrl(id: number, imageName: string) {
        return this.urlImage + id + '/' + imageName;
    }

    //Prevent missing ids by looking in an array of id the neighbors of current one
    //case 18 where is last id and there is no 17 
    getNextId(id: number, direction: number) {
        const valueToFind = (element) => element == id;
        let nextId = this.idArticleList.findIndex(valueToFind);
        if (direction === 1 && !this.idArticleList[nextId + direction]) {
            return this.idArticleList[0];
        }
        else if (direction === -1 && !this.idArticleList[nextId + direction]) {
            return this.idArticleList[this.idArticleList.length + direction];
        }
        else {
            nextId += direction;
            return this.idArticleList[nextId]
        }
    }

}
