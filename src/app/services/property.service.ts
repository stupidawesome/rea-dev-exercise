import { Injectable } from '@angular/core';
import {Property} from '../models/property';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BackendDataResponse} from '../interfaces/backend-data-response';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class PropertyService {

  private fetch$: Observable<any> = this.http.get('assets/mocks/backend-data.json').share();
  private data$ = new ReplaySubject<any>(1);

  get results$(): Observable<Property[]> {
    return this.data$.map((data: BackendDataResponse) => data.results.map(Property.create));
  }

  get savedProperties$(): Observable<Property[]> {
    return this.data$.map((data: BackendDataResponse) => data.saved.map(Property.create));
  }

  constructor(private http: HttpClient) {}

  load() {
    this.fetch$.subscribe((data: BackendDataResponse) => this.data$.next(data));
  }
}
