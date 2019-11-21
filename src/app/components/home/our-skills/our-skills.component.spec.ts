import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSkillsComponent } from './our-skills.component';

describe('OurSkillsComponent', () => {
  let component: OurSkillsComponent;
  let fixture: ComponentFixture<OurSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
