import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleSolverComponent } from './wordle-solver.component';
import { beforeEach, describe, it } from 'node:test';

import '@types/jest';

describe('WordleSolverComponent', () => {
  let component: WordleSolverComponent;
  let fixture: ComponentFixture<WordleSolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordleSolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleSolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

