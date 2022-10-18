import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEquipmentMonitoringComponent } from './test-equipment-monitoring.component';

describe('TestEquipmentMonitoringComponent', () => {
  let component: TestEquipmentMonitoringComponent;
  let fixture: ComponentFixture<TestEquipmentMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEquipmentMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestEquipmentMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
