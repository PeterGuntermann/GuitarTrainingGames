import { GuitarString } from "../enums/guitar-string.enum";
import { Note } from "../enums/note.enum";
import { Scale } from "../enums/scale.enum";

export interface RollResult {
    rootNote: Note;
    scale: Scale;
    guitarString: GuitarString;
}
