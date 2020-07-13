import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromTweets from './'

export const selectTweetsState = createFeatureSelector<fromTweets.State>(fromTweets.featureKey)

export const getAllTweets = createSelector(
  selectTweetsState,
  state => state.tweets
)
