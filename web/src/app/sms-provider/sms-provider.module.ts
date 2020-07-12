import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsProviderRoutingModule } from './sms-provider-routing.module';
import { SmsProviderService } from './sms-provider.service';
import { SmsProviderComponent } from './sms-provider.component';

@NgModule({
  declarations: [SmsProviderComponent],
  imports: [
    CommonModule,
    SmsProviderRoutingModule
  ],
  providers: [
    SmsProviderService
  ]
})
export class SmsProviderModule {
}
