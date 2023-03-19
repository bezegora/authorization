import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPage } from './auth-page/auth.page';
import { AuthGuard } from './auth.guard';
import { SignUpPage } from './sign-up/sign-up.page';

const routes: Routes = [
  {
    path: 'login',
    component: AuthPage
  },
  {
    path: 'sign-up',
    component: SignUpPage
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
