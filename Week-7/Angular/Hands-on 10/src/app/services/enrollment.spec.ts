import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { EnrollmentService } from './enrollment';
import { CourseService } from './course';

describe('EnrollmentService', () => {
  let service: EnrollmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EnrollmentService,
        provideHttpClient(),
        {
          provide: CourseService,
          useValue: {
            getCourses: () => of([])
          }
        }
      ]
    });
    service = TestBed.inject(EnrollmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
