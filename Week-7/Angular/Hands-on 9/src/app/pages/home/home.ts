import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 0;

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({

      next: (courses) => {

        this.availableCourses = courses.length;

      },

      error: (err) => {

        console.error(err);

      }

    });

    console.log('HomeComponent initialised — courses loaded');

  }

  ngOnDestroy(): void {

    console.log('HomeComponent destroyed');

  }

  onEnrollClick(): void {

    this.message = 'Enrollment opened!';

  }

  // [property] is one-way binding (Component -> DOM)
  // [(ngModel)] is two-way binding (DOM <-> Component)

}
