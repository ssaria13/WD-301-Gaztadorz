import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeactionComponent } from './takeaction.component';

describe('TakeactionComponent', () => {
  let component: TakeactionComponent;
  let fixture: ComponentFixture<TakeactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeactionComponent]
    });
    fixture = TestBed.createComponent(TakeactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
