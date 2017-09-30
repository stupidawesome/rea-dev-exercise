import {fakeAsync, flushMicrotasks, inject, TestBed} from '@angular/core/testing';

import {PropertyService} from './property.service';
import {SavedPropertiesService} from './saved-properties.service';
import * as fakeData from '../test/mock-backend.json';
import {Property} from '../models/property';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

const initialProperties = fakeData['saved'].map(Property.create);
let initialProperties$;

export class PropertyServiceStub {
  get savedProperties$() {
    return initialProperties$;
  }
}

describe('SavedPropertiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SavedPropertiesService,
        {provide: PropertyService, useClass: PropertyServiceStub}
      ]
    });
  });

  beforeEach(() => {
    initialProperties$ = Observable.of(initialProperties);
  });

  it('should be created', inject([SavedPropertiesService], (service: SavedPropertiesService) => {
    expect(service).toBeTruthy();
  }));

  describe(`adding a property to saved properties`, () => {

    it(`should add the property to the list`,
      fakeAsync(inject([SavedPropertiesService], (service: SavedPropertiesService) => {
        let subject;
        const result = [...initialProperties, Property.create({})];
        service.properties$.subscribe((value) => subject = value);
        service.add(Property.create({}));
        flushMicrotasks();
        expect(subject).toEqual(result);
      }))
    );

    it(`should not add a property that's already in the list`,
      fakeAsync(inject([SavedPropertiesService], (service: SavedPropertiesService) => {
        let subject;
        const property = Property.create({});
        const result = [...initialProperties, property];
        service.properties$.subscribe((value) => subject = value);
        service.add(property);
        service.add(property);
        flushMicrotasks();
        expect(subject).toEqual(result);
      }))
    );
  });

  describe('removing a property', () => {

    it(`should remove it from the saved properties`,
      fakeAsync(inject([SavedPropertiesService], (service: SavedPropertiesService) => {
        let subject;
        const property = Property.create({});
        const result = initialProperties;
        service.properties$.subscribe((value) => subject = value);
        service.add(property);
        service.remove(property);
        flushMicrotasks();
        expect(subject).toEqual(result);
      }))
    );

    it(`should ignore it if it's not in the list`,
      fakeAsync(inject([SavedPropertiesService], (service: SavedPropertiesService) => {
        let subject;
        const property = Property.create({});
        const result = initialProperties;
        service.properties$.subscribe((value) => subject = value);
        service.remove(property);
        flushMicrotasks();
        expect(subject).toEqual(result);
      }))
    );
  });
});
