import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExperienceComponent } from './main-experience.component';

describe('MainExperienceComponent', () => {
  let component: MainExperienceComponent;
  let fixture: ComponentFixture<MainExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
