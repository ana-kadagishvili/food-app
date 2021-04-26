import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnewproductsComponent } from './viewnewproducts.component';

describe('ViewnewproductsComponent', () => {
  let component: ViewnewproductsComponent;
  let fixture: ComponentFixture<ViewnewproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnewproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnewproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
