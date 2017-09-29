import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PropertyCardComponent} from './components/property-card/property-card.component';
import {RootComponent} from './components/root/root.component';
import {ButtonComponent} from './components/button/button.component';
import {ListComponent} from './components/list/list.component';
import {ListItemComponent} from './components/list-item/list-item.component';
import {HeadingComponent} from './components/heading/heading.component';
import {PropertiesSavedComponent} from './components/saved-properties/saved-properties.component';
import {ResultsComponent} from './components/results/results.component';
import {HoverIntentComponent} from './components/hover-intent/hover-intent.component';
import {LayerComponent} from './layer/layer.component';
import {HoverIntentRevealComponent} from './components/hover-intent-reveal/hover-intent-reveal.component';
import {SavedPropertiesService} from './services/saved-properties.service';
import {HttpClientModule} from '@angular/common/http';
import {PropertyService} from './services/property.service';

@NgModule({
  declarations: [
    RootComponent,
    PropertyCardComponent,
    ButtonComponent,
    ListComponent,
    ListItemComponent,
    HeadingComponent,
    PropertiesSavedComponent,
    ResultsComponent,
    HoverIntentComponent,
    LayerComponent,
    HoverIntentRevealComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PropertyService,
    SavedPropertiesService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
