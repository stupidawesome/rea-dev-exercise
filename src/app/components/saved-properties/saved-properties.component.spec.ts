import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesSavedComponent } from './saved-properties.component';

xdescribe('PropertiesSavedComponent', () => {
  let component: PropertiesSavedComponent;
  let fixture: ComponentFixture<PropertiesSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
