import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CourseList } from './course-list';
import { Course } from '../../models/course.model';

describe('CourseList', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const mockCourses: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'TypeScript',
      code: 'TS201',
      credits: 3,
      gradeStatus: 'pending'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideRouter([]),
        provideMockStore({
          initialState: {
            course: {
              courses: mockCourses,
              loading: false,
              error: null
            },
            enrollment: {
              enrolledCourseIds: []
            }
          }
        })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course cards from the mock store state', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const headings = fixture.debugElement.queryAll(By.css('app-course-card h3'));

    expect(headings.length).toBe(2);
    expect(headings[0].nativeElement.textContent).toContain('Angular Fundamentals');
    expect(headings[1].nativeElement.textContent).toContain('TypeScript');
  });

  it('should show the loading indicator when loading is true', async () => {
    store.setState({
      course: {
        courses: [],
        loading: true,
        error: null
      },
      enrollment: {
        enrolledCourseIds: []
      }
    });
    store.refreshState();

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const loadingText = fixture.debugElement.query(By.css('p'));

    expect(loadingText.nativeElement.textContent).toContain('Loading courses...');
  });
});
