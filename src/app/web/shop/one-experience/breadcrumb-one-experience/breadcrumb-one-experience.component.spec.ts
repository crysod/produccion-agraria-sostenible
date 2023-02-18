import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbOneExperienceComponent } from './breadcrumb-one-experience.component';

describe('BreadcrumbOneExperienceComponent', () => {
  let component: BreadcrumbOneExperienceComponent;
  let fixture: ComponentFixture<BreadcrumbOneExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbOneExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbOneExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
