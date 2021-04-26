import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewburgersComponent } from './viewburgers.component';

describe('ViewburgersComponent', () => {
  let component: ViewburgersComponent;
  let fixture: ComponentFixture<ViewburgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewburgersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewburgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
