import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { CourseDetail } from './course-detail';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';

describe('CourseDetail', () => {
  let component: CourseDetail;
  let fixture: ComponentFixture<CourseDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetail],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ id: '1' }))
          }
        },
        {
          provide: CourseService,
          useValue: {
            getCourseById: () => of({
              id: 1,
              name: 'Angular Fundamentals',
              code: 'ANG101',
              credits: 4,
              gradeStatus: 'passed'
            })
          }
        },
        {
          provide: EnrollmentService,
          useValue: {
            getStudentsByCourse: () => of([])
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
