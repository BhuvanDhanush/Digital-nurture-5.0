import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import {
  selectAllCourses,
  selectCoursesError,
  selectCoursesLoading
} from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses$!: Observable<Course[]>;

  isLoading$!: Observable<boolean>;

  errorMessage$!: Observable<string | null>;

  selectedCourseId: number | null = null;

  constructor(
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCoursesLoading);
    this.errorMessage$ = this.store.select(selectCoursesError);
    this.store.dispatch(loadCourses());

  }

  onEnroll(courseId: number): void {

    console.log('Enrolling in course: ' + courseId);

    this.selectedCourseId = courseId;

  }

  viewCourse(courseId: number): void {

    this.router.navigate(['/courses', courseId]);

  }

}
