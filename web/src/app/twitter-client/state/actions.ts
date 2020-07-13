import { createAction, props } from '@ngrx/store';
import { Tweet } from './model'

export const loadTweets = createAction(
  '[Tweets] Load Tweets'
);

export const loadTweetsSuccess = createAction(
  '[Tweets] Load Tweets Success',
  props<{ tweets: Tweet[] }>()
);

export const loadTweetsFailure = createAction(
  '[Tweets] Load Tweets failure',
  props<{ error: Error }>()
);

export const sortByKey = createAction(
  '[Tweets] Sort by Key',
  props<{ key: string }>()
)
