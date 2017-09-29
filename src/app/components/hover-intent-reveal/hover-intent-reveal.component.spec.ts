import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverIntentRevealComponent } from './hover-intent-reveal.component';

describe('HoverIntentRevealComponent', () => {
  let component: HoverIntentRevealComponent;
  let fixture: ComponentFixture<HoverIntentRevealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverIntentRevealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverIntentRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
