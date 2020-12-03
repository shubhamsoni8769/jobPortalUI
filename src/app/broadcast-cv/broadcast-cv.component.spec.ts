import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastCVComponent } from './broadcast-cv.component';

describe('BroadcastCVComponent', () => {
  let component: BroadcastCVComponent;
  let fixture: ComponentFixture<BroadcastCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
