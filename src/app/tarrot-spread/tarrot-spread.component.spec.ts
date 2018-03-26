import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarrotSpreadComponent } from './tarrot-spread.component';

describe('TarrotSpreadComponent', () => {
  let component: TarrotSpreadComponent;
  let fixture: ComponentFixture<TarrotSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarrotSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarrotSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
