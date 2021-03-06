import { Injectable } from "@angular/core";
import { ChordType } from "../models/chord-type.enum";
import { GuitarString } from "../models/guitar-string.enum";
import { Note } from "../models/note.enum";
import { Scale } from "../models/scale.enum";

@Injectable({
    providedIn: "root",
})
export class RandomGeneratorService {
    constructor() {}

    public randomNote(): Note {
        return this.chooseFromEnum(Note);
    }

    public randomChordType(): ChordType {
        return this.chooseFromEnum(ChordType);
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

    /**
     * Creates a random integer.
     * @param min Minimal possible value.
     * @param max Maximal possible value.
     * @returns an integer from the closed interval `[min, max]`
     */
    public randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max + 1) + min);
    }

    /**
     * Chooses randomly from an enum.
     * @param enumType The enum to choose from.
     */
    public chooseFromEnum(enumType: any): any {
        const enumKeys = Object.keys(enumType);
        const max = enumKeys.length - 1;
        const randomInteger = this.randomInteger(0, max);
        return enumType[enumKeys[randomInteger]];
    }
}
