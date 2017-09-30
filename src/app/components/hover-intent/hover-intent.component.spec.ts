import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverIntentComponent } from './hover-intent.component';

xdescribe('HoverIntentComponent', () => {
  let component: HoverIntentComponent;
  let fixture: ComponentFixture<HoverIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
