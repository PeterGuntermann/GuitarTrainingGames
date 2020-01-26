import { Mode } from "./mode.enum";
import { Tone } from "./tone.enum";

export interface RollResult {
    root: Tone;
    mode: Mode;
    startString: number;
}