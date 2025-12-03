import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'overview',
        loadComponent: () =>
            import('./overview/overview/overview.component').then(m => m.OverviewComponent),
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./overview/login/login').then(m => m.LoginComponent),
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./overview/register/register').then(m => m.RegisterComponent),
    },
    {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'register',
        pathMatch: 'full'
    }
];
