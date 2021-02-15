import { GuitarString } from "../../models/guitar-string.enum";

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
