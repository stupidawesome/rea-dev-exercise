import { Injectable } from '@angular/core';
import {Property} from '../models/property';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Subject} from 'rxjs/Subject';
import {PropertyService} from './property.service';
import 'rxjs/add/operator/withLatestFrom';

@Injectable()
export class SavedPropertiesService {
  private _update$: Subject<Function> = new Subject();
  private _properties$: ReplaySubject<Property[]> = new ReplaySubject(1);

  get properties$() {
    return this._properties$
      .merge(this.propertySvc.savedProperties$);
  }

  constructor(private propertySvc: PropertyService) {
    this._update$
      .withLatestFrom(this.properties$)
      .map(([operation, properties]) => {
        return operation(properties);
      })
      .subscribe(this._properties$);
  }

  add(propertyToAdd: Property) {
    this._update$.next(accum => accum.includes(propertyToAdd) ? accum : accum.concat(propertyToAdd));
  }

  remove(propertyToRemove: Property) {
    this._update$.next(accum => accum.filter(property => property !== propertyToRemove));
  }
}
