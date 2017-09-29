import {Component, OnInit} from '@angular/core';
import {HoverIntentComponent} from '../hover-intent/hover-intent.component';

@Component({
  selector: 'rea-hover-intent-reveal',
  templateUrl: './hover-intent-reveal.component.html',
  styleUrls: ['./hover-intent-reveal.component.scss']
})
export class HoverIntentRevealComponent implements OnInit {

  public intent = this.parent.intent;

  constructor(private parent: HoverIntentComponent) {}

  ngOnInit() {}

}
