import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnathorizedComponent } from './unathorized.component';

describe('UnathorizedComponent', () => {
  let component: UnathorizedComponent;
  let fixture: ComponentFixture<UnathorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnathorizedComponent]
    });
    fixture = TestBed.createComponent(UnathorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
