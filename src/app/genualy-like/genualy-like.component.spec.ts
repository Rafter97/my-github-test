import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenualyLikeComponent } from './genualy-like.component';

describe('GenualyLikeComponent', () => {
  let component: GenualyLikeComponent;
  let fixture: ComponentFixture<GenualyLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenualyLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenualyLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
