import { Injectable } from '@angular/core';
import {Property} from '../models/property';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BackendDataResponse} from '../interfaces/backend-data-response';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class PropertyService {

  load$: Observable<any> = this.http.get('assets/mocks/backend-data.json').share();

  results$: Observable<Property[]> = this.load$.map((data: BackendDataResponse) => data.results.map(Property.create));

  savedProperties$: Observable<Property[]> = this.load$
    .map((data: BackendDataResponse) => data.saved.map(Property.create));

  constructor(private http: HttpClient) {}
}
