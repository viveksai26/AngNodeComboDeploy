import { Injectable, Injector, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http'
import { ErrorServiceService } from "../error-service/error-service.service";

@Injectable()
export class ErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) { }
    handlerError(error: Error | HttpErrorResponse) {
        const errorService = this.injector.get(ErrorServiceService);
        const router = this.injector.get(Router);
        const ngZone = this.injector.get(NgZone);
        if (error instanceof HttpErrorResponse) {
            console.log('error')
        }
        ngZone.run(() => {
            router.navigate(['/error']);
        })
    }
}