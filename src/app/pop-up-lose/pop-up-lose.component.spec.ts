import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpLoseComponent } from './pop-up-lose.component';

describe('PopUpLoseComponent', () => {
  let component: PopUpLoseComponent;
  let fixture: ComponentFixture<PopUpLoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpLoseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpLoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
