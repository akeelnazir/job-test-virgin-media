import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component'


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'twitter',
    loadChildren: () => import('./twitter-client/twitter-client.module').then(mod => mod.TwitterClientModule),
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
