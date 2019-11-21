import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { resolve } from 'q';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    isConnected: boolean = false;

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {

        let getLocal = window.sessionStorage.getItem('connect');
        if (getLocal === 'true') {
            this.isConnected = true;
        } else {
            this.isConnected = false
        }

        return new Promise(
            (resolve, reject) => {
                if (this.isConnected) {
                    resolve(true);
                } else {
                    this.router.navigate(['/login']);
                    resolve(false);
                }
            }
        );
    }


}
