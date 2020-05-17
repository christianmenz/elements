import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Webcomponent2Component } from './webcomponent2.component';

describe('Webcomponent2Component', () => {
  let component: Webcomponent2Component;
  let fixture: ComponentFixture<Webcomponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Webcomponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Webcomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
