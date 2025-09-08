import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardsection } from './dashboardsection';

describe('Dashboardsection', () => {
  let component: Dashboardsection;
  let fixture: ComponentFixture<Dashboardsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboardsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
