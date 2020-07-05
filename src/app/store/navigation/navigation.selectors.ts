import {createSelector} from '@ngrx/store';
import {AppState} from '../../reducers';
import {navigationFeatureKey, NavigationState} from './navigation.reducer';

export const selectNavigation = (state: AppState) => state[navigationFeatureKey];

export const selectIsSidenavOpen = createSelector(
  selectNavigation,
  (state: NavigationState) => state.isSidenavOpen
);
