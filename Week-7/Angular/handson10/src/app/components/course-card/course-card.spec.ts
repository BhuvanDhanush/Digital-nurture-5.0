import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { vi } from 'vitest';

import { CourseCard } from './course-card';
import { Course } from '../../models/course.model';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        provideMockStore({
          initialState: {
            enrollment: {
              enrolledCourseIds: []
            }
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the course name from input', () => {
    component.course = mockCourse;

    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(heading.textContent).toContain('Data Structures');
  });

  it('should emit enrollRequested when enroll button is clicked', () => {
    component.course = mockCourse;
    const emitSpy = vi.spyOn(component.enrollRequested, 'emit');

    fixture.detectChanges();

    fixture.debugElement.query(By.css('button')).nativeElement.click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should log changes in ngOnChanges', () => {
    const consoleSpy = vi.spyOn(console, 'log');

    component.ngOnChanges({
      course: new SimpleChange(null, mockCourse, true)
    });

    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should toggle details state', () => {
    expect(component.isExpanded).toBe(false);

    component.toggleDetails();

    expect(component.isExpanded).toBe(true);
  });
});
