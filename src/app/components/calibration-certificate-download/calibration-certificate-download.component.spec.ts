import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationCertificateDownloadComponent } from './calibration-certificate-download.component';

describe('CalibrationCertificateDownloadComponent', () => {
  let component: CalibrationCertificateDownloadComponent;
  let fixture: ComponentFixture<CalibrationCertificateDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationCertificateDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrationCertificateDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
