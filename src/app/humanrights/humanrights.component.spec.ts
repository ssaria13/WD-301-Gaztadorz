import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanrightsComponent } from './humanrights.component';

describe('HumanrightsComponent', () => {
  let component: HumanrightsComponent;
  let fixture: ComponentFixture<HumanrightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanrightsComponent]
    });
    fixture = TestBed.createComponent(HumanrightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
