import { GuitarString } from "./guitar-string.enum";
import { Scale } from "./scale.enum";
import { Note } from "./note.enum";

export interface RollResult {
    rootNote: Note;
    scale: Scale;
    guitarString: GuitarString;
}
