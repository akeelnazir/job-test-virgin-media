import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { UiModule } from './shared/ui.module'
import { StateModule } from './state/state.module'
import { TwitterClientModule } from './twitter-client/twitter-client.module'

import { AppComponent } from './app.component'
import { LoginComponent } from './login.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    TwitterClientModule,
    UiModule,
    StateModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
