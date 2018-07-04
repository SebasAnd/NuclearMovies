import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularpeopleComponent } from './popularpeople.component';

describe('PopularpeopleComponent', () => {
  let component: PopularpeopleComponent;
  let fixture: ComponentFixture<PopularpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
