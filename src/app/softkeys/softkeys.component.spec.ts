import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftkeysComponent } from './softkeys.component';

describe('SoftkeysComponent', () => {
  let component: SoftkeysComponent;
  let fixture: ComponentFixture<SoftkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
