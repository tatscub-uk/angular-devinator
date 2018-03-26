import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuneSpreadComponent } from './rune-spread.component';

describe('RuneSpreadComponent', () => {
  let component: RuneSpreadComponent;
  let fixture: ComponentFixture<RuneSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuneSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuneSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
