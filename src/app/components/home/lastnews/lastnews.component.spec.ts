import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastnewsComponent } from './lastnews.component';

describe('LastnewsComponent', () => {
  let component: LastnewsComponent;
  let fixture: ComponentFixture<LastnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
