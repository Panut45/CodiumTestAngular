import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenElseFinallyComponent } from './between-else-finally.component';

describe('BetweenElseFinallyComponent', () => {
  let component: BetweenElseFinallyComponent;
  let fixture: ComponentFixture<BetweenElseFinallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetweenElseFinallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetweenElseFinallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
