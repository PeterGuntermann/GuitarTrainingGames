import { GuitarString } from "../../models/guitar-string.enum";
import { FretboardChart } from "./fretboard-chart";

export const fretboardChartDummy: FretboardChart = {
    guitarStrings: [
        {
            tone: GuitarString.higherE,
            frets: [
                { fretNumber: 0, hasMarker: false },
                { fretNumber: 1, hasMarker: false },
                { fretNumber: 2, hasMarker: true },
                { fretNumber: 3, hasMarker: false },
            ],
        },
        {
            tone: GuitarString.higherB,
            frets: [
                { fretNumber: 0, hasMarker: false },
                { fretNumber: 1, hasMarker: false },
                { fretNumber: 2, hasMarker: false },
                { fretNumber: 3, hasMarker: true },
            ],
        },
        {
            tone: GuitarString.G,
            frets: [
                { fretNumber: 0, hasMarker: true },
                { fretNumber: 1, hasMarker: false },
                { fretNumber: 2, hasMarker: false },
                { fretNumber: 3, hasMarker: false },
            ],
        },
        {
            tone: GuitarString.D,
            frets: [
                { fretNumber: 0, hasMarker: true },
                { fretNumber: 1, hasMarker: false },
                { fretNumber: 2, hasMarker: true },
                { fretNumber: 3, hasMarker: false },
            ],
        },
        {
            tone: GuitarString.A,
            frets: [
                { fretNumber: 0, hasMarker: true },
                { fretNumber: 1, hasMarker: false },
                { fretNumber: 2, hasMarker: true },
                { fretNumber: 3, hasMarker: true },
            ],
        },
        {
            tone: GuitarString.lowerE,
            frets: [
                { fretNumber: 0, hasMarker: true },
                { fretNumber: 1, hasMarker: true },
                { fretNumber: 2, hasMarker: false },
                { fretNumber: 3, hasMarker: true },
            ],
        },
    ],
};
