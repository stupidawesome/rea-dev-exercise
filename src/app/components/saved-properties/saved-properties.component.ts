import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Property} from '../../models/property';
import {SavedPropertiesService} from '../../services/saved-properties.service';

@Component({
  selector: 'rea-properties-saved',
  templateUrl: './saved-properties.component.html',
  styleUrls: ['./saved-properties.component.scss']
})
export class PropertiesSavedComponent implements OnInit, OnChanges {

  @Input()
  properties: Property[];

  constructor(private savedPropertiesSvc: SavedPropertiesService) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  removeProperty(property) {
    this.savedPropertiesSvc.remove(property);
  }
}
