import { State as TweetsState } from '../twitter-client/state/'

export interface AppState {
  tweets: TweetsState;
}
