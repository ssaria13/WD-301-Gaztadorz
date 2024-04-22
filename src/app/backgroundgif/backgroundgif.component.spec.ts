import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundgifComponent } from './backgroundgif.component';

describe('BackgroundgifComponent', () => {
  let component: BackgroundgifComponent;
  let fixture: ComponentFixture<BackgroundgifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundgifComponent]
    });
    fixture = TestBed.createComponent(BackgroundgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
