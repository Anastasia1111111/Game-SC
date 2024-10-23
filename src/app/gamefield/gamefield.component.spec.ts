import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamefieldComponent } from './gamefield.component';

describe('GamefieldComponent', () => {
  let component: GamefieldComponent;
  let fixture: ComponentFixture<GamefieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamefieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
