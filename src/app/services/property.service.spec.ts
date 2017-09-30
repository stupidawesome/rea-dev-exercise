import {async, inject, TestBed} from '@angular/core/testing';

import {PropertyService} from './property.service';
import * as fakeData from '../test/mock-backend.json';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('PropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PropertyService]
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', inject([PropertyService], (service: PropertyService) => {
    expect(service).toBeTruthy();
  }));

  describe('loading all properties', () => {

    it('should filter properties by results and saved properties after it has loaded',
      async(inject([PropertyService, HttpClient, HttpTestingController],
        (service: PropertyService, http: HttpClient, httpMock: HttpTestingController) => {
          const subject = service.results$;
          const subject2 = service.savedProperties$;

          service.load();

          subject.subscribe((properties) => {
            expect(properties.length).toBeGreaterThan(0);
          });

          subject2.subscribe((properties) => {
            expect(properties.length).toBeGreaterThan(0);
          });

          const req = httpMock.expectOne(PropertyService.endpoint);

          req.flush(fakeData);
          httpMock.verify();
        }))
    );
  });

  it('should not hit the endpoint more than once when multiple requests are made simultaneously',
    async(inject([PropertyService, HttpClient, HttpTestingController],
      (service: PropertyService, http: HttpClient, httpMock: HttpTestingController) => {
        service.load();
        service.load();

        const req = httpMock.expectOne(PropertyService.endpoint);

        req.flush(fakeData);
        httpMock.verify();
      }))
  );

  it('should fetch new data on subsequent calls',
    async(inject([PropertyService, HttpClient, HttpTestingController],
      (service: PropertyService, http: HttpClient, httpMock: HttpTestingController) => {
        service.load();
        let req = httpMock.expectOne(PropertyService.endpoint);
        req.flush(fakeData);

        window.setTimeout(() => {
          service.load();

          req = httpMock.expectOne(PropertyService.endpoint);

          req.flush(fakeData);
          httpMock.verify();
        });
      }))
  );

});
