import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalbgComponent } from './historicalbg.component';

describe('HistoricalbgComponent', () => {
  let component: HistoricalbgComponent;
  let fixture: ComponentFixture<HistoricalbgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricalbgComponent]
    });
    fixture = TestBed.createComponent(HistoricalbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
