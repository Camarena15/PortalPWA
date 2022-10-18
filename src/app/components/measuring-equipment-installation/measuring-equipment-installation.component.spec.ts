import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringEquipmentInstallationComponent } from './measuring-equipment-installation.component';

describe('MeasuringEquipmentInstallationComponent', () => {
  let component: MeasuringEquipmentInstallationComponent;
  let fixture: ComponentFixture<MeasuringEquipmentInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuringEquipmentInstallationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasuringEquipmentInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
