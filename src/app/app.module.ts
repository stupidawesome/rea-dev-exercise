import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PropertyCardComponent} from './components/property-card/property-card.component';
import {AppComponent} from './components/root/root.component';
import {ButtonComponent} from './components/button/button.component';
import {ListComponent} from './components/list/list.component';
import {ListItemComponent} from './components/list-item/list-item.component';
import {HeadingComponent} from './components/heading/heading.component';
import { PropertiesSavedComponent } from './components/properties-saved/properties-saved.component';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    ButtonComponent,
    ListComponent,
    ListItemComponent,
    HeadingComponent,
    PropertiesSavedComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
