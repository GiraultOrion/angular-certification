import { Route, mapToCanActivate } from '@angular/router';
import { AngularCertificationRoutes } from '@utils';
import { ResultsGuard } from './shared/guards';

export const appRoutes: Route[] = [
  {
    path: AngularCertificationRoutes.QUIZZ_ROUTE,
    loadChildren: () => import('@features/quizz').then((p) => p.QuizzModule),
  },
  {
    path: AngularCertificationRoutes.RESULTS_ROUTE,
    loadChildren: () =>
      import('@features/results').then((p) => p.ResultsModule),
    canActivate: mapToCanActivate([ResultsGuard]),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AngularCertificationRoutes.QUIZZ_ROUTE,
  },
  {
    path: '**',
    redirectTo: AngularCertificationRoutes.QUIZZ_ROUTE,
  },
];
