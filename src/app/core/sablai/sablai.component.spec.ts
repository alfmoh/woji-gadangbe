import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SablaiComponent } from './sablai.component';

describe('SablaiComponent', () => {
  let component: SablaiComponent;
  let fixture: ComponentFixture<SablaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SablaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SablaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
