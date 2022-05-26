import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsModeComponent } from './boards-mode.component';

describe('BoardsModeComponent', () => {
  let component: BoardsModeComponent;
  let fixture: ComponentFixture<BoardsModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardsModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
