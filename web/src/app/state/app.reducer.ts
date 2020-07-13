import { ActionReducerMap } from '@ngrx/store'

import { AppState } from './app.interface'
import { reducer as tweetsReducer } from '../twitter-client/state/reducer'

export const appReducer: ActionReducerMap<AppState> = {
  tweets: tweetsReducer
}
