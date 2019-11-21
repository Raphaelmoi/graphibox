import { Component, OnInit, HostListener } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';
import { RouterLinkActive, Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    fixedMenu: boolean = false;
    getLocal = window.sessionStorage.getItem('connect');
    isConnected = false;

    constructor(private authService: AuthGuardService, private router: Router) { }

    //change the fixedMenu value to true when scroll position is bigger than screen size
    @HostListener('window:scroll', ['$event'])
    doSomething(event) {
        if (window.pageYOffset + 50 >= window.innerHeight) {
            this.fixedMenu = true;
        } else {
            this.fixedMenu = false;
        }
    }

    @HostListener('window:click', ['$event.target'])
    onClick() {
        this.isConnected = this.authService.isConnected;
    }

    ngOnInit() {
        if (this.getLocal === 'true') {
            this.isConnected = true;
        } else {
            this.isConnected = false
        }
    }

    onDisconnect() {
        sessionStorage.clear();
        this.authService.isConnected = false;
        this.isConnected = false;
        this.router.navigate(['home']);
    }
}
