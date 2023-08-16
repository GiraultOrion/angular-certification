import { Route } from '@angular/router';
import { QUIZZ_ROUTE, RESULTS_ROUTE } from '@utils';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: QUIZZ_ROUTE,
  },
  {
    path: QUIZZ_ROUTE,
    loadChildren: () => import('@features/quizz').then((p) => p.QuizzModule),
  },
  {
    path: RESULTS_ROUTE,
    loadChildren: () =>
      import('@features/results').then((p) => p.ResultsModule),
  },
  {
    path: '**',
    redirectTo: QUIZZ_ROUTE,
  },
];
