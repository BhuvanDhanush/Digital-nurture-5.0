import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    {
      id: 1,
      name: 'Angular',
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get courses from the expected URL', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const request = httpMock.expectOne('http://localhost:3000/courses');

    expect(request.request.method).toBe('GET');

    request.flush(mockCourses);
  });

  it('should return the configured error message when the request fails', () => {
    let actualError: Error | undefined;

    service.getCourses().subscribe({
      next: () => {
        throw new Error('expected an error response');
      },
      error: error => {
        actualError = error;
      }
    });

    const request1 = httpMock.expectOne('http://localhost:3000/courses');
    request1.flush('Server error', {
      status: 500,
      statusText: 'Server Error'
    });

    const request2 = httpMock.expectOne('http://localhost:3000/courses');
    request2.flush('Server error', {
      status: 500,
      statusText: 'Server Error'
    });

    const request3 = httpMock.expectOne('http://localhost:3000/courses');
    request3.flush('Server error', {
      status: 500,
      statusText: 'Server Error'
    });

    expect(actualError?.message).toBe(
      'Failed to load courses. Please try again.'
    );
  });
});
