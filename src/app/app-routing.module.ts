import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'inicio', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
                        { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
                        { path: '**', redirectTo:'inicio', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
