import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Webcomponent1Component } from './webcomponent1.component';

describe('Webcomponent1Component', () => {
  let component: Webcomponent1Component;
  let fixture: ComponentFixture<Webcomponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Webcomponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Webcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
