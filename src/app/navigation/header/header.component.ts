import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {closeSidenav, openSidenav, toggleSidenav} from '../../store/navigation/navigation.actions';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private store: Store<AppState>,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `wandal_icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/img/wandal-logo.svg'));
  }

  openSidenav(open?: boolean) {
    if (open) {
      this.store.dispatch(openSidenav());
    } else if (!open) {
      this.store.dispatch(closeSidenav());
    }
  }

  toggleSidenav() {
    this.store.dispatch(toggleSidenav());
  }
}
