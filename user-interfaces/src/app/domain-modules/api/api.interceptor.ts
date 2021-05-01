import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

// usually, this config should came from environment variables
interface ApiInterceptorConfig {
  apiFullUrl: string;
  apiProxyPrefix: string;
}

class ApiInterceptor implements HttpInterceptor {
  constructor({ apiFullUrl, apiProxyPrefix }: ApiInterceptorConfig) {
    this.apiFullUrl = apiFullUrl; // example: /proxy-api (for dev), or http://my-api-endpoint.com
    this.apiProxyPrefix = apiProxyPrefix; // example: /api
    this.apiProxyPrefixRegex = new RegExp(`^${this.apiProxyPrefix}`); // example ^/api
  }

  private apiFullUrl;

  private apiProxyPrefix;

  private apiProxyPrefixRegex;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return this.startsWithProxyPrefix(req.url)
      ? next.handle(this.replacePrefixWithApiUrl(req))
      : next.handle(req);
  }

  private replacePrefixWithApiUrl(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      url: req.url.replace(this.apiProxyPrefixRegex, this.apiFullUrl),
    });
  }

  private startsWithProxyPrefix(url) {
    return this.apiProxyPrefixRegex.test(url);
  }
}

export function ApiInterceptorFactory(
  apiInterceptorConfig: ApiInterceptorConfig,
): HttpInterceptor {
  return new ApiInterceptor(apiInterceptorConfig);
}
