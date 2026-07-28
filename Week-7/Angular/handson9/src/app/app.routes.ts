import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { NotFound } from './pages/not-found/not-found';

import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'courses',
    component: CourseList
  },

  {
    path: 'courses/:id',
    component: CourseDetail
  },

  {
    path: 'profile',
    component: StudentProfile,
    canActivate: [authGuard]
  },

  {
    path: 'enroll',
    component: EnrollmentForm,
    canActivate: [authGuard]
  },

  {
    path: 'enroll-reactive',
    component: ReactiveEnrollmentForm,
    canActivate: [authGuard]
  },

  {
    path: '**',
    component: NotFound
  }

];
