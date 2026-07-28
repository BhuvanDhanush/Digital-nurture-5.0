import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 4
    },
    {
      id: 2,
      name: 'TypeScript',
      code: 'TS201',
      credits: 3
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WEB301',
      credits: 4
    },
    {
      id: 4,
      name: 'Database Systems',
      code: 'DB401',
      credits: 3
    },
    {
      id: 5,
      name: 'Cloud Computing',
      code: 'CC501',
      credits: 4
    }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

}
