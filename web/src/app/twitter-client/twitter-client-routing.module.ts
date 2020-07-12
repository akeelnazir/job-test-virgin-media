import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwitterClientComponent } from './twitter-client.component';

const routes: Routes = [
  { path: 'twitter-client', component: TwitterClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitterClientRoutingModule {
}
