import { Injectable } from "@angular/core";
import { GuitarString } from "./models/guitar-string.enum";
import { Note } from "./models/note.enum";
import { Scale } from "./models/scale.enum";

@Injectable({
    providedIn: "root",
})
export class RandomGeneratorService {
    constructor() {}

    public randomNote(): Note {
        const enumKeys = Object.keys(Note);
        const randomInteger = this.randomInteger(0, 11);
        return Note[enumKeys[randomInteger]];
    }

    public randomScale(): Scale {
        const enumKeys = Object.keys(Scale);
        const randomInteger = this.randomInteger(0, 6);
        return Scale[enumKeys[randomInteger]];
    }

    public randomGuitarStringForScales(): GuitarString {
        const enumKeys = Object.keys(GuitarString);
        const randomInteger = this.randomInteger(0, 3);
        return GuitarString[enumKeys[randomInteger]];
    }

    public randomGuitarStringForNotes(): GuitarString {
        const enumKeys = Object.keys(GuitarString);
        const randomInteger = this.randomInteger(0, 5);
        return GuitarString[enumKeys[randomInteger]];
    }

    public randomInteger(from: number, to: number) {
        return Math.floor(Math.random() * (to + 1) + from);
    }
}
