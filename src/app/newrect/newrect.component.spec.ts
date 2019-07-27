import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrectComponent } from "./newrect.component";

describe('NewrectComponent', () => {
  let component: NewrectComponent;
  let fixture: ComponentFixture<NewrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
