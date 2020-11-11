import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject,Observable} from 'rxjs/index';

@Injectable()
export class SharedService {
  constructor(private toastr: ToastrService, private spinner : NgxSpinnerService) { }

  private title = new BehaviorSubject<String>('App title');
  private title$ = this.title.asObservable();

  private bread = new BehaviorSubject<any>('App bread');
  private bread$ = this.bread.asObservable();
  
  loggerSuccess(msg: string, timeOut = 2500) {
    this.toastr.success(msg, 'Success', { timeOut: timeOut, progressBar: true });
  }

  loggerInfo(msg: string, timeOut = 3500) {
    this.toastr.info(msg, 'Info', { timeOut: timeOut, progressBar: true });
  }

  loggerError(msg: string, timeOut = 3500) {
    this.toastr.error(msg, 'Error', { timeOut: timeOut, progressBar: true });
  }

  loggerWarning(msg: string, timeOut = 3500) {
    this.toastr.warning(msg, 'Warning', { timeOut: timeOut, progressBar: true });
  }

  showLoader() {
    this.spinner.show();
  }

  hideLoader() {
    
    this.spinner.hide();
  }


  setTitle(title: String) {
    this.title.next(title);
  }

  getTitle(): Observable<String> {
    return this.title$;
  }

  setBread(bread: any) {
    this.bread.next(bread);
  }

  getBread(): Observable<any> {
    return this.bread$;
  }

}
