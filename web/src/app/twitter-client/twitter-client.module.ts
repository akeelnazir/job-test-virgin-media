import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { TwitterClientRoutingModule } from './twitter-client-routing.module'
import { UiModule } from '../shared/ui.module'
import { TwitterClientComponent } from './twitter-client.component'
import { TwitterService } from './state/twitter.service'

@NgModule({
  declarations: [TwitterClientComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UiModule,
    TwitterClientRoutingModule
  ],
  providers: [
    TwitterService
  ]
})
export class TwitterClientModule {
}
