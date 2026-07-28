import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit(): void {

    setTimeout(() => {

      this.courses = this.courseService.getCourses();

      this.isLoading = false;

    }, 1500);

  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: Course): number {
    // trackBy prevents Angular from recreating DOM elements unnecessarily.
    return course.id;
  }

}
