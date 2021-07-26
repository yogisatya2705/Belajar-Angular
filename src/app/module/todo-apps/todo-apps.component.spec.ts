import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAppsComponent } from './todo-apps.component';

describe('TodoAppsComponent', () => {
  let component: TodoAppsComponent;
  let fixture: ComponentFixture<TodoAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
