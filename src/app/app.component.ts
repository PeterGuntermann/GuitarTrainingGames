import { Component }  from '@angular/core';
import { Mode }       from "./types/mode.enum";
import { RollResult } from "./types/roll-result.interface";
import { Tone }       from "./types/tone.enum";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    tone = Tone;
    mode = Mode;
    rollResult: RollResult;

    roll() {
        this.rollResult = {
            root: Tone.Csharp_Dflat,
            mode: Mode.Phrygian,
            startString: 1,
        };
    }

  reset() {
    this.rollResult = undefined;
  }
}
