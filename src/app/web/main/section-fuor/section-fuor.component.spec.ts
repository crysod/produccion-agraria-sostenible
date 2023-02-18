import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFuorComponent } from './section-fuor.component';

describe('SectionFuorComponent', () => {
  let component: SectionFuorComponent;
  let fixture: ComponentFixture<SectionFuorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFuorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFuorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
