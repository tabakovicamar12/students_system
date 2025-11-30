import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'overview',
        loadComponent: () =>
            import('./overview/overview/overview.component').then(m => m.OverviewComponent),
    },
    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'overview',
        pathMatch: 'full'
    }
];
