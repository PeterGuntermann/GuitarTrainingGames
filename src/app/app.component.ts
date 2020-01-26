import {Component} from '@angular/core';
import { Mode }    from "./types/mode.enum";
import { Tone }    from "./types/tone.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tone = Tone;
  mode = Mode;

}
