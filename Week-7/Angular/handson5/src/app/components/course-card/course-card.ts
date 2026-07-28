import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    NgStyle,
    Highlight,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: string;
  };

  @Output() enrollRequested = new EventEmitter<number>();

  enrolled = false;
  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course Changed:', changes['course']);
  }

  enroll(): void {
    this.enrollRequested.emit(this.course.id);
    this.enrolled = true;
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      'card--enrolled': this.enrolled,
      'card--full': this.course.credits >= 4,
      expanded: this.isExpanded
    };
  }

}
