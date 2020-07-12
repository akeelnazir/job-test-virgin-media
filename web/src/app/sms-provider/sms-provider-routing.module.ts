import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmsProviderComponent } from './sms-provider.component';

const routes: Routes = [
  { path: '', component: SmsProviderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsProviderRoutingModule {
}
