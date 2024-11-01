import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAndPaymentPageComponent } from './summary-and-payment-page.component';

describe('SummaryAndPaymentPageComponent', () => {
  let component: SummaryAndPaymentPageComponent;
  let fixture: ComponentFixture<SummaryAndPaymentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryAndPaymentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryAndPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
