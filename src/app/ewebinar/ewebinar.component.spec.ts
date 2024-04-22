import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwebinarComponent } from './ewebinar.component';

describe('EwebinarComponent', () => {
  let component: EwebinarComponent;
  let fixture: ComponentFixture<EwebinarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EwebinarComponent]
    });
    fixture = TestBed.createComponent(EwebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
