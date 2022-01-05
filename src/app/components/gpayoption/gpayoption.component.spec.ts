import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpayoptionComponent } from './gpayoption.component';

describe('GpayoptionComponent', () => {
  let component: GpayoptionComponent;
  let fixture: ComponentFixture<GpayoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpayoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpayoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
