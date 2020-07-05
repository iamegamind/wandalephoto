import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromNavigation from '../store/navigation/navigation.reducer';


export interface AppState {
  [fromNavigation.navigationFeatureKey]: fromNavigation.NavigationState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromNavigation.navigationFeatureKey]: fromNavigation.navReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

