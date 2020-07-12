import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterClientRoutingModule } from './twitter-client-routing.module'
import { TwitterUserService } from './twitter-user.service';
import { TwitterClientComponent } from './twitter-client.component';

@NgModule({
  declarations: [TwitterClientComponent],
  imports: [
    CommonModule,
    TwitterClientRoutingModule
  ],
  providers: [
    TwitterUserService
  ]
})
export class TwitterClientModule {
}
