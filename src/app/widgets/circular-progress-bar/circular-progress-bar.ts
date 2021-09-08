/*
Title : Circular pgogress bar with navigation arrow
  variables used,
  value: Value of the progress bar. Defaults to zero.
  showArrow : Enable/disable Arrow shaped icon (default is true)
  label : Progress bar label name
  labelColour : label colour
  fillColour : fill colour
  trackColour : track colour
  size : defines progress bar total size (calculation is based on font-size)

  Usage :

  <progress-bar-circle
  [size]="'240'"
  [value]="55"
  [label]="'PAID BACK'"
  [labelColour]="'#b88d97'"
  [trackColour]="'#ebebe8'"
  [fillColour] = "'#307bbb'"
  [showArrow] = false>
  </progress-bar-circle>

*/

import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'progress-bar-circle',
  templateUrl: './circular-progress-bar.html',
  styleUrls: ['./circular-progress-bar.scss']
})
export class ProgressBarCircleComponent implements OnInit {
  progress = 0;
  @Input() value;
  @Input() customValue?;
  @Input() showArrow;
  @Input() labelColour: string;
  @Input() fillColour: string;
  @Input() trackColour: string;
  @Input() size: string;
  @Input() label: any;
  stylExp: any;

  constructor() {
    this.value = 0;
    this.customValue = '';
    this.showArrow = true;
    this.fillColour = '#307bbb';
    this.labelColour = '#b88d97';
    this.trackColour = '#ebebe8';
    this.size = '240';
  }

  ngOnInit() {
    setInterval(() => {
      this.runProgress();
      this.stylExp = '18px solid ' + this.fillColour;
    }, 100);
    this.stylExp = '18px solid ' + this.fillColour;
  }
  runProgress() {
    if (this.value) {
      if ((this.progress === this.value) || (this.progress === 100)) {
        return;
      } else if (this.progress > this.value) {
        this.progress = 0;
      } else {
        this.progress++;
      }
    } else {
      this.progress = 0;
    }
  }

}
