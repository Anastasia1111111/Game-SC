import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpWinnerComponent } from './pop-up-winner.component';

describe('PopUpWinnerComponent', () => {
  let component: PopUpWinnerComponent;
  let fixture: ComponentFixture<PopUpWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpWinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
