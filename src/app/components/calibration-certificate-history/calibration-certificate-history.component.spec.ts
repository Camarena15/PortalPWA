import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationCertificateHistoryComponent } from './calibration-certificate-history.component';

describe('CalibrationCertificateHistoryComponent', () => {
  let component: CalibrationCertificateHistoryComponent;
  let fixture: ComponentFixture<CalibrationCertificateHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationCertificateHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrationCertificateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
