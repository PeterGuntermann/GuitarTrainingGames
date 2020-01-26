import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-fretboard',
    templateUrl: './fretboard.component.html',
    styleUrls: ['./fretboard.component.scss'],
})
export class FretboardComponent implements OnInit {

    @Input() numberOfStrings = 6;
    @Input() numberOfFrets = 15;
    guitarStrings: number[];
    frets: number[];
    fretNumbers: string[];

    ngOnInit() {
      this.guitarStrings = [...Array(this.numberOfStrings).keys()].map(f => f + 1).reverse();
      this.frets = [...Array(this.numberOfFrets).keys()].map(f => f + 1);
      this.fretNumbers = this.frets.map(f=>{
        switch (f) {
          case 3: return 'III';
          case 5: return 'V';
          case 7: return 'VII';
          case 9: return 'IX';
          case 12: return 'XII';
          case 15: return 'XV';
          case 17: return 'XVII';
          case 19: return 'IXX';
          default: return '';
        }
      });
    }

}
