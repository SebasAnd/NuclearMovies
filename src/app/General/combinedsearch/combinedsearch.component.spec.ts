import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedsearchComponent } from './combinedsearch.component';

describe('CombinedsearchComponent', () => {
  let component: CombinedsearchComponent;
  let fixture: ComponentFixture<CombinedsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
