import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseForCollegeHelpComponent } from './use-for-college-help.component';

describe('UseForCollegeHelpComponent', () => {
  let component: UseForCollegeHelpComponent;
  let fixture: ComponentFixture<UseForCollegeHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseForCollegeHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseForCollegeHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
