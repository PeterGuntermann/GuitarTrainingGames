export interface FretboardChart {
    guitarStrings: FretboardChartGuitarString[];
}

export interface FretboardChartGuitarString {
    frets: FretboardChartFret[];
}

export interface FretboardChartFret {
    hasMarker: boolean;
}
