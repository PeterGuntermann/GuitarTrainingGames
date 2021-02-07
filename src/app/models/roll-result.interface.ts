import { GuitarString } from "./guitar-string.enum";
import { Note } from "./note.enum";
import { Scale } from "./scale.enum";

export interface RollResult {
    rootNote: Note;
    scale: Scale;
    guitarString: GuitarString;
}
