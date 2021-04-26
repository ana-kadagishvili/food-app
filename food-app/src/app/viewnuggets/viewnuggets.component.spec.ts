import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnuggetsComponent } from './viewnuggets.component';

describe('ViewnuggetsComponent', () => {
  let component: ViewnuggetsComponent;
  let fixture: ComponentFixture<ViewnuggetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnuggetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnuggetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
