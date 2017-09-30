import {Component, OnInit} from '@angular/core';
import {PropertyService} from '../../services/property.service';
import {Observable} from 'rxjs/Observable';
import {Property} from '../../models/property';
import {SavedPropertiesService} from '../../services/saved-properties.service';
import 'rxjs/add/operator/merge';

@Component({
  selector: 'rea-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  results$: Observable<Property[]> = this.propertySvc.results$;
  savedProperties$: Observable<Property[]> = this.savedPropertiesSvc.properties$;

  constructor(private propertySvc: PropertyService, private savedPropertiesSvc: SavedPropertiesService) {}

  ngOnInit() {
    this.propertySvc.load();
    this.propertySvc.load();

    window.setTimeout(() => {
      this.propertySvc.load();
    });
  }
}
