import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakenewsComponent } from './fakenews.component';

describe('FakenewsComponent', () => {
  let component: FakenewsComponent;
  let fixture: ComponentFixture<FakenewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakenewsComponent]
    });
    fixture = TestBed.createComponent(FakenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
