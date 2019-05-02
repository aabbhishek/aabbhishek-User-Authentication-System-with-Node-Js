import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTableComponent } from './call-table.component';

describe('CallTableComponent', () => {
  let component: CallTableComponent;
  let fixture: ComponentFixture<CallTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
