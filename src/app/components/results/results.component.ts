import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SavedPropertiesService} from '../../services/saved-properties.service';
import {Property} from '../../models/property';
import {createDict} from '../../helpers/create-dict';

@Component({
  selector: 'rea-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnChanges {

  @Input()
  results: Property[];

  @Input()
  savedProperties: Property[];

  savedPropertiesDict: Array<string>;

  constructor(private savedPropertiesSvc: SavedPropertiesService) { }

  ngOnInit() { }

  ngOnChanges(changes) {
    if (changes.savedProperties) {
      this.savedPropertiesDict = createDict('id', changes.savedProperties.currentValue);
    }
  }

  addProperty(property) {
    this.savedPropertiesSvc.add(property);
  }
}
