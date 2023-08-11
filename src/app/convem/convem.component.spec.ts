import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvemComponent } from './convem.component';

describe('ConvemComponent', () => {
  let component: ConvemComponent;
  let fixture: ComponentFixture<ConvemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvemComponent]
    });
    fixture = TestBed.createComponent(ConvemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
