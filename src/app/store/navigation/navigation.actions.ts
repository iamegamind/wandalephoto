import { createAction, props } from '@ngrx/store';

export const openSidenav = createAction(
  '[Navigation] Open Sidenav'
);
export const closeSidenav = createAction(
  '[Navigation] Close Sidenav'
);
export const toggleSidenav = createAction(
  '[Navigation] Toggle Sidenav'
);
