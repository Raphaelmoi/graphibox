import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLsitComponent } from './message-lsit.component';

describe('MessageLsitComponent', () => {
  let component: MessageLsitComponent;
  let fixture: ComponentFixture<MessageLsitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageLsitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageLsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
