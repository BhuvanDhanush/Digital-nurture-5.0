import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { CourseService } from '../../services/course';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = 'Odd';
  agreeToTerms = false;

  submitted = false;

  constructor(
    private courseService: CourseService
  ) {}

  onSubmit(form: NgForm): void {

    console.log(form.value);
    console.log(form.valid);

    if (!form.valid) {
      return;
    }

    this.courseService.createCourse({
      name: this.studentName,
      code: `COURSE-${this.courseId}`,
      credits: 3,
      gradeStatus: 'pending'
    }).subscribe({

      next: () => {

        this.submitted = true;

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

}
