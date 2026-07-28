import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: Course;

  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  enrolledIds$: Observable<number[]>;

  constructor(
    private store: Store
  ) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  toggleEnrollment(): void {

    this.store.select(selectEnrolledIds).subscribe(enrolledIds => {

      if (enrolledIds.includes(this.course.id)) {
        this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
      } else {
        this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
        this.enrollRequested.emit(this.course.id);
      }

    }).unsubscribe();

  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      expanded: this.isExpanded,
      'card--full': this.course.credits >= 4
    };
  }

}
