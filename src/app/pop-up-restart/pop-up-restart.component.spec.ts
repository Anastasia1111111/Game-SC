import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRestartComponent } from './pop-up-restart.component';

describe('PopUpComponent', () => {
  let component: PopUpRestartComponent;
  let fixture: ComponentFixture<PopUpRestartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpRestartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpRestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
