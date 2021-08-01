import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleServicesComponent } from './example-services.component';

describe('ExampleServicesComponent', () => {
  let component: ExampleServicesComponent;
  let fixture: ComponentFixture<ExampleServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
