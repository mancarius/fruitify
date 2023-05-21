import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { finalize, Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: "root",
})
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // show loader
    // TODO: add store dispatch
    //this.store.dispatch(coreActions.startLoading());

    return next.handle(request).pipe(
      finalize(() => {
        // TODO: add store dispatch
        /*this.store.dispatch(coreActions.stopLoading()*/})
    );
  }
}
