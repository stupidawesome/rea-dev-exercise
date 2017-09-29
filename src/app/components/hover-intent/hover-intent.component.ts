import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'rea-hover-intent',
  templateUrl: './hover-intent.component.html',
  styleUrls: ['./hover-intent.component.scss']
})
export class HoverIntentComponent implements OnInit {

  intent = new BehaviorSubject(false);

  constructor() { }

  ngOnInit() {
  }

  handleMouseEnter() {
    this.intent.next(true);
  }

  handleMouseLeave() {
    this.intent.next(false);
  }

}
