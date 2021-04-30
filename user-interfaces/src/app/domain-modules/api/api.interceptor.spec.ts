import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptorFactory } from './api.interceptor';

describe('AuthInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  function configureApiInterceptor(apiFullUrl) {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useFactory: () =>
            ApiInterceptorFactory({
              apiFullUrl,
              apiProxyPrefix: '/api',
            }),
          multi: true,
        },
      ],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  }

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should handle api requests correctly', () => {
    configureApiInterceptor('/proxy-api');

    httpClient
      .get('/api/some-url')
      .subscribe((data) => expect(data).toEqual({}));

    const request = httpTestingController.expectOne('/proxy-api/some-url');
    request.flush({});
  });

  it('should proxy api requests to correct configured url', () => {
    configureApiInterceptor('http://localhost:3000');

    httpClient
      .get('/api/some-url')
      .subscribe((data) => expect(data).toEqual({}));

    const request = httpTestingController.expectOne(
      'http://localhost:3000/some-url'
    );
    request.flush({});
  });

  it('should handle non-api requests correctly', () => {
    configureApiInterceptor('/proxy-api');

    httpClient
      .get('http://localhost/some-url')
      .subscribe((data) => expect(data).toEqual({}));

    const request = httpTestingController.expectOne(
      'http://localhost/some-url'
    );
    request.flush({});
  });
});
