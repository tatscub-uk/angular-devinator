import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OghamSpreadComponent } from './ogham-spread.component';

describe('OghamSpreadComponent', () => {
  let component: OghamSpreadComponent;
  let fixture: ComponentFixture<OghamSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OghamSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OghamSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
