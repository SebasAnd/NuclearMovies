import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralrearchComponent } from './generalrearch.component';

describe('GeneralrearchComponent', () => {
  let component: GeneralrearchComponent;
  let fixture: ComponentFixture<GeneralrearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralrearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralrearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
