import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ErrorsHandlerService implements ErrorHandler {
    constructor(private injector: Injector,
       
        private ngZone: NgZone) {
    }
    handleError(error: Error | HttpErrorResponse) {
        console.log(error,'errorHandlerCalled');

        const router = this.injector.get(Router);

        if (error instanceof HttpErrorResponse) {
            // Server or connection error happened
            if (!navigator.onLine) {
                // Handle offline error
            } else {
                // Handle Http Error (error.status === 403, 404...)
                if (error.status === 401) {
                    localStorage.clear();
                   // this.toastr.error(error.error.message, 'Error', { timeOut: 2500, progressBar: true });
                    // router.navigate(['/signin'])
                    this.ngZone.run(() => router.navigate(['/auth']));
                } else if (error.error) {
                    console.log(error,'error is called');
                    //this.toastr.error(error.error.message, 'Error', { timeOut: 2500, progressBar: true });
                }
                // if(error.status === 401){
                //     let router = this.injector.get(Router);
                //     document.getElementById('logoutJD').click();
                //     router.navigate(['signin']);
                // }
            }
        } else {
            // Handle Client Error (Angular Error, ReferenceError...)     
        }
        
    }
}

export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}