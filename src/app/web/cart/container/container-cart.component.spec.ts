import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCartComponent } from './container-cart.component';

describe('ContainerCartComponent', () => {
  let component: ContainerCartComponent;
  let fixture: ComponentFixture<ContainerCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
