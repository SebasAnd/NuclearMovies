import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsonairComponent } from './showsonair.component';

describe('ShowsonairComponent', () => {
  let component: ShowsonairComponent;
  let fixture: ComponentFixture<ShowsonairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsonairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsonairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
