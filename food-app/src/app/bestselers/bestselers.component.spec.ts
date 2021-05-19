import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestselersComponent } from './bestselers.component';

describe('BestselersComponent', () => {
  let component: BestselersComponent;
  let fixture: ComponentFixture<BestselersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestselersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestselersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
