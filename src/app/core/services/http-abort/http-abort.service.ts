import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpAbortService {

  private pendingHTTPRequests$ = new Subject<void>();

  /**
   * Observable that emits when pending HTTP requests are aborted.
   */
  public onAbortPendingRequests$ = this.pendingHTTPRequests$.asObservable();

  /**
   * Aborts pending HTTP requests.
   */
  public abortPendingRequests() {
    this.pendingHTTPRequests$.next();
  }

}