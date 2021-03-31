import { GuitarString } from "@models/guitar-string.enum";

export interface FretboardChart {
    guitarStrings: FretboardChartGuitarString[];
}

export interface FretboardChartGuitarString {
    tone: GuitarString;
    frets: FretboardChartFret[];
}

export interface FretboardChartFret {
    fretNumber: number;
    hasMarker: boolean;
}

export class FretboardChartEntry {
    constructor(
        public readonly guitarString: GuitarString,
        public readonly fretNumber: number,
        public hasMarker: boolean
    ) {}
}
