import { Injectable } from "@angular/core";
import { ChordType } from "../models/chord-type.enum";
import { GuitarString } from "../models/guitar-string.enum";
import { Note } from "../models/note.enum";
import { Scale } from "../models/scale.enum";

/**
 * The one and only service to generate anything randomly.
 */
@Injectable({
    providedIn: "root",
})
export class RandomGeneratorService {
    constructor() {}

    /**
     * @returns one of the 12 notes randomly.
     */
    public randomNote(): Note {
        return this.chooseFromEnum(Note);
    }

    /**
     * @returns one of many chord extensions (e.g. maj7, m7♭5) randomly.
     */
    public randomChordType(): ChordType {
        return this.chooseFromEnum(ChordType);
    }

    /**
     * @returns one scale (e.g. phrygian, mixolydian) randomly.
     */
    public randomScale(): Scale {
        return this.chooseFromEnum(Scale);
    }

    /**
     * @returns one guitar string randomly except for higher B and E.
     */
    public randomGuitarStringForScales(): GuitarString {
        return this.chooseFromList([
            GuitarString.G,
            GuitarString.D,
            GuitarString.A,
            GuitarString.lowerE,
        ]);
    }

    /**
     * @returns one guitar string randomly.
     */
    public randomGuitarStringForNotes(): GuitarString {
        return this.chooseFromList([
            GuitarString.higherE,
            GuitarString.higherB,
            GuitarString.G,
            GuitarString.D,
            GuitarString.A,
            GuitarString.lowerE,
        ]);
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

    /**
     * Chooses randomly from a list.
     * @param list The list to choose from.
     */
    public chooseFromList(list: any[]): any {
        const max = list.length - 1;
        const randomInteger = this.randomInteger(0, max);
        return list[randomInteger];
    }
}
