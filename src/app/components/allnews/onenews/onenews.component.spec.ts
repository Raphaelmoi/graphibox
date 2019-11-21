import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnenewsComponent } from './onenews.component';

describe('OnenewsComponent', () => {
  let component: OnenewsComponent;
  let fixture: ComponentFixture<OnenewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnenewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
