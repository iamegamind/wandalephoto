import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {selectIsSidenavOpen} from '../../store/navigation/navigation.selectors';
import {closeSidenav, openSidenav, toggleSidenav} from '../../store/navigation/navigation.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

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
