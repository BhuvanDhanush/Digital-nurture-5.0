import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import {
  provideRouter
} from '@angular/router';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';

import { authInterceptor } from './interceptors/auth';
import { errorHandlerInterceptor } from './interceptors/error-handler';
import { loadingInterceptor } from './interceptors/loading';
import { CourseEffects } from './store/course/course.effects';
import { courseReducer } from './store/course/course.reducer';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';

export const appConfig: ApplicationConfig = {

  providers: [

    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideStore(),

    provideState('course', courseReducer),

    provideState('enrollment', enrollmentReducer),

    provideEffects(CourseEffects),

    provideStoreDevtools({
      maxAge: 25
    }),

    provideHttpClient(

      withInterceptors([

        authInterceptor,
        errorHandlerInterceptor,
        loadingInterceptor

      ])

    )

  ]

};
