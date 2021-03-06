import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';
import {selectIsSidenavOpen} from './store/navigation/navigation.selectors';
import {closeSidenav, openSidenav, toggleSidenav} from './store/navigation/navigation.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wandalephoto';
  isSideNavOpened = false;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(selectIsSidenavOpen)
      .subscribe(isOpen => {
        this.isSideNavOpened = isOpen;
      });
  }

  openSidenav(open?: boolean) {
    if (open) {
      this.store.dispatch(openSidenav());
    } else if (!open) {
      this.store.dispatch(closeSidenav());
    } else {
      this.store.dispatch(toggleSidenav());
    }
  }
}
