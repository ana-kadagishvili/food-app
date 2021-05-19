import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyboxComponent } from './familybox.component';

describe('FamilyboxComponent', () => {
  let component: FamilyboxComponent;
  let fixture: ComponentFixture<FamilyboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
