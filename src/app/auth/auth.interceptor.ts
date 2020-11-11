import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, share } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { SharedService } from '../shared/shared.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService,
        private sharedService: SharedService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let getToken = this.authService.getToken();

        if (getToken != null) {
            let token = getToken == null ? '' : getToken;
            const copiedReq = req.clone({ headers: req.headers.set('x-auth', token) });
            return next.handle(copiedReq)
                .pipe(
                    // Log when response observable either completes or errors
                    finalize(() => {
                    })
                );
        }
        else {
            return next.handle(req).pipe(
                // Log when response observable either completes or errors
                finalize(() => {
                })
            );
        }
    }
}
