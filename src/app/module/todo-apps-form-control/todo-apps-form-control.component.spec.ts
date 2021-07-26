import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAppsFormControlComponent } from './todo-apps-form-control.component';

describe('TodoAppsFormControlComponent', () => {
  let component: TodoAppsFormControlComponent;
  let fixture: ComponentFixture<TodoAppsFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAppsFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAppsFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
