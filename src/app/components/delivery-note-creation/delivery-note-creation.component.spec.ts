import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryNoteCreationComponent } from './delivery-note-creation.component';

describe('DeliveryNoteCreationComponent', () => {
  let component: DeliveryNoteCreationComponent;
  let fixture: ComponentFixture<DeliveryNoteCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryNoteCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryNoteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
