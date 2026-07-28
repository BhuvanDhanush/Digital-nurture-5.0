import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';

import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';

import { Course } from '../../models/course.model';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {

  course?: Course;
  students: Student[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.route.paramMap
      .pipe(

        map(params => Number(params.get('id'))),

        filter(id => !Number.isNaN(id)),

        switchMap(id => {

          return this.courseService.getCourseById(id).pipe(

            switchMap(course => {

              // switchMap cancels the previous inner Observable
              // whenever a new courseId is emitted.
              return this.enrollmentService.getStudentsByCourse(id).pipe(

                catchError(err => {

                  console.error(err);

                  return of([]);

                }),

                map(students => ({
                  course,
                  students
                }))

              );

            })

          );

        })

      )
      .subscribe({

        next: ({ course, students }) => {

          console.log('Course detail loaded:', course, students);

          this.course = course;
          this.students = students;
          this.cdr.detectChanges();

        },

        error: err => {

          console.error(err);

        }

      });

  }

}
