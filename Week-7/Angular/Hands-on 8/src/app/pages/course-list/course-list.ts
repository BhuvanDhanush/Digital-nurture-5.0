import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: Course[] = [];

  selectedCourseId: number | null = null;

  errorMessage = '';

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({

      next: (courses) => {

        this.courses = courses;

      },

      error: (err) => {

        this.errorMessage = err.message;

      },

      complete: () => {

        this.isLoading = false;

      }

    });

  }

  onEnroll(courseId: number): void {

    console.log('Enrolling in course: ' + courseId);

    this.selectedCourseId = courseId;

  }

  viewCourse(courseId: number): void {

    this.router.navigate(['/courses', courseId]);

  }

  trackByCourseId(index: number, course: Course): number {

    return course.id;

  }

}
