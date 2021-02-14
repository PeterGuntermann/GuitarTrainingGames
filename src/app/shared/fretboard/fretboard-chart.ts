export interface FretboardChart {
    guitarStrings: {
        // emptyStringTone: GuitarString;
        frets: {
            hasMarker: boolean;
        }[];
    }[];
}
