import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { appReducer } from './app.reducer'
import { Effects as TweetsEffects } from '../twitter-client/state/effects'
import { environment } from '../../environments/environment'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer, { metaReducers: [] }),
    EffectsModule.forRoot([TweetsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class StateModule {
  static forRoot (): ModuleWithProviders<any> {
    return {
      ngModule: StateModule
    }
  }
}
