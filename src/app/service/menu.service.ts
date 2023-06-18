import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private subject = new Subject<any>();

  emit(event: boolean) {
    this.subject.next({ event});
  }

  listen(): Observable<any> {
    return this.subject.asObservable();
  }
}
