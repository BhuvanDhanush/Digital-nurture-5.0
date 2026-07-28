import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

import { LoadingService } from '../services/loading';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  const loadingService = inject(LoadingService);

  loadingService.isLoading$.next(true);

  return next(req).pipe(

    // finalize runs whether the request succeeds or fails.

    finalize(() => {

      loadingService.isLoading$.next(false);

    })

  );

};
