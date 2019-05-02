import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPanComponent } from './login-pan.component';

describe('LoginPanComponent', () => {
  let component: LoginPanComponent;
  let fixture: ComponentFixture<LoginPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
