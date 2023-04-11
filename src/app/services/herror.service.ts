import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AlertService } from "../services/alert.service";

@Injectable({
  providedIn: 'root'
})
export class HerrorService {
  hErrorService: any;
  constructor(private alertNotification: AlertService) {

  }

  handleError(error) {
    let errorMessage = '';
    let statusCode = error.status
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = error.error.message;
    }
    // console.log(statusCode)
    switch (statusCode) {
      case 0:
        this.hErrorService.alertNotification.alertMessage('CORS Error, Check for the Backend connection', 'danger', 'error')
        break;
      case 500:
        this.hErrorService.alertNotification.alertMessage('Internal server error', 'danger', 'error')
        break;
      case 501:
        this.hErrorService.alertNotification.alertMessage('Method Not Implemented', 'danger', 'error')
        break;
      case 502:
        this.hErrorService.alertNotification.alertMessage('Bad Request, Try again', 'danger', 'error')
        break;
      case 507:
        this.hErrorService.alertNotification.alertMessage('Insufficient Storage, Please contact the administrator', 'danger', 'error')
        break;
      case 511:
        this.hErrorService.alertNotification.alertMessage('Network Authentication Required, Try again', 'danger', 'error')
        break;
      case 400:
        this.hErrorService.alertNotification.alertMessage('Bad Request', 'danger', 'error')
        break;
      case 401:
        this.hErrorService.alertNotification.alertMessage('User Unauthorized', 'danger', 'error')
        break;
      case 403:
        this.hErrorService.alertNotification.alertMessage('User Doesnot have access', 'danger', 'error')
        break;
      case 404:
        this.hErrorService.alertNotification.alertMessage('Method not found', 'danger', 'error')
        break;
      case 404:
        this.hErrorService.alertNotification.alertMessage('Method not Allowed', 'danger', 'error')
        break;
      case 415:
        this.hErrorService.alertNotification.alertMessage('Unsupported Media Type', 'danger', 'error')
        break;
      case 431:
        this.hErrorService.alertNotification.alertMessage('Request Header Fields Too Large', 'danger', 'error')
        break;
      case 444:
        this.hErrorService.alertNotification.alertMessage('No response from the Server', 'danger', 'error')
        break;
      default:
        this.hErrorService.alertNotification.alertMessage('There is a problem with the connection, we will get back to you soon', 'danger', 'error')
        break;
    }


    return throwError(errorMessage);

  }
}
