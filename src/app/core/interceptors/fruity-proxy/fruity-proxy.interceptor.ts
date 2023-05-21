import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { API_BASE_URL, API_BASE_URL_PROXY } from "@core/configs";

@Injectable()
export class FruityProxyInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(this._proxy(request));
  }

  /**
   * Proxies the given request.
   * @param request
   * @returns
   */
  _proxy(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const url = new URL(request.url);
    const apiUrl = new URL(API_BASE_URL);
    
    if (url.host === apiUrl.host) {
      return request.clone({ url: `${API_BASE_URL_PROXY}${url.pathname}` });
    }

    return request.clone();
  }
}
