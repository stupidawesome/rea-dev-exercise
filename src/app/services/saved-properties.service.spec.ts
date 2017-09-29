import { TestBed, inject } from '@angular/core/testing';

import { SavedPropertiesService } from './saved-properties.service';

describe('SavedPropertiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedPropertiesService]
    });
  });

  it('should be created', inject([SavedPropertiesService], (service: SavedPropertiesService) => {
    expect(service).toBeTruthy();
  }));
});
