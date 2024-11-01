import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerInformationPageComponent } from './passenger-information-page.component';

describe('PassengerInformationPageComponent', () => {
  let component: PassengerInformationPageComponent;
  let fixture: ComponentFixture<PassengerInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengerInformationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
