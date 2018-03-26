import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IchingSpreadComponent } from './iching-spread.component';

describe('IchingSpreadComponent', () => {
  let component: IchingSpreadComponent;
  let fixture: ComponentFixture<IchingSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IchingSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IchingSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
