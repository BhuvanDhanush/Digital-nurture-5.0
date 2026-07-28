import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CourseService } from './course';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private apiUrl = 'http://localhost:3000/students';
  private enrolledCourseIds: number[] = [];
  private availableCourses: Course[] = [];

  constructor(
    private http: HttpClient,
    private courseService: CourseService
  ) {
    this.courseService.getCourses().subscribe({
      next: courses => {
        this.availableCourses = courses;
      },
      error: err => {
        console.error(err);
      }
    });
  }

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(
      enrolledCourseId => enrolledCourseId !== courseId
    );
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Course[] {
    return this.availableCourses.filter(course =>
      this.enrolledCourseIds.includes(course.id)
    );
  }

  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http.get<Student[]>(
      `${this.apiUrl}?courseId=${courseId}`
    );
  }

}
