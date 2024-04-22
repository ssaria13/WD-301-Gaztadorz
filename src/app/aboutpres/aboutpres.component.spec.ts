import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpresComponent } from './aboutpres.component';

describe('AboutpresComponent', () => {
  let component: AboutpresComponent;
  let fixture: ComponentFixture<AboutpresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutpresComponent]
    });
    fixture = TestBed.createComponent(AboutpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
