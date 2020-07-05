import {Action, createReducer, on} from '@ngrx/store';
import * as NavigationActions from './navigation.actions';

export const navigationFeatureKey = 'navigation';

export interface NavigationState {
  isSidenavOpen: boolean;
}

export const initialState: NavigationState = {
  isSidenavOpen: false
};

// tslint:disable-next-line:variable-name
export const _navReducer = createReducer(
  initialState,
  on(NavigationActions.openSidenav, state => ({...state, isSidenavOpen: true})),
  on(NavigationActions.closeSidenav, state => ({...state, isSidenavOpen: false})),
  on(NavigationActions.toggleSidenav, state => ({...state, isSidenavOpen: !state.isSidenavOpen}))
);

export function navReducer(state: NavigationState | undefined, action: Action) {
  return _navReducer(state, action);
}
