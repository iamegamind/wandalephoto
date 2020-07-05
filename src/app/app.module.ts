import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './navigation/header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {AboutComponent} from './pages/about/about.component';
import {AppRoutingModule} from './app.routing.module';
import {HomeComponent} from './pages/home/home.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {metaReducers, reducers} from './reducers';
import { ResponsiveGridComponent } from './navigation/responsive-grid/responsive-grid.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import {HttpClientModule} from '@angular/common/http';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ResponsiveGridComponent,
    GridItemComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}