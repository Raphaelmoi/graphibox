import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllnewsItemComponent } from './allnews-item.component';

describe('AllnewsItemComponent', () => {
  let component: AllnewsItemComponent;
  let fixture: ComponentFixture<AllnewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllnewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllnewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
