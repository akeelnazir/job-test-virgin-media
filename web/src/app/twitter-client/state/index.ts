import { Tweet } from './model'

export const featureKey = 'tweets'

export interface State {
  tweets: Tweet[];
  loading: boolean;
  error: Error;
}

export const initialState: State = {
  tweets: [],
  loading: false,
  error: null
};
