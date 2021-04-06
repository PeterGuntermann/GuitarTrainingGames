import { GuitarString } from "@models/guitar-string.enum";
import {
    FretboardChart,
    FretboardChartEntry,
    FretboardChartGuitarString,
} from "./fretboard-chart";

export class FretboardChartBuilder {
    private readonly fretboardChartEntries: FretboardChartEntry[];

    constructor(private readonly numberOfFrets = 4) {
        this.fretboardChartEntries = [
            new FretboardChartEntry(GuitarString.higherE, 1, false),
            new FretboardChartEntry(GuitarString.higherE, 2, false),
            new FretboardChartEntry(GuitarString.higherE, 3, false),
            new FretboardChartEntry(GuitarString.higherE, 4, false),
            new FretboardChartEntry(GuitarString.higherB, 1, false),
            new FretboardChartEntry(GuitarString.higherB, 2, false),
            new FretboardChartEntry(GuitarString.higherB, 3, false),
            new FretboardChartEntry(GuitarString.higherB, 4, false),
            new FretboardChartEntry(GuitarString.G, 1, false),
            new FretboardChartEntry(GuitarString.G, 2, false),
            new FretboardChartEntry(GuitarString.G, 3, false),
            new FretboardChartEntry(GuitarString.G, 4, false),
            new FretboardChartEntry(GuitarString.D, 1, false),
            new FretboardChartEntry(GuitarString.D, 2, false),
            new FretboardChartEntry(GuitarString.D, 3, false),
            new FretboardChartEntry(GuitarString.D, 4, false),
            new FretboardChartEntry(GuitarString.A, 1, false),
            new FretboardChartEntry(GuitarString.A, 2, false),
            new FretboardChartEntry(GuitarString.A, 3, false),
            new FretboardChartEntry(GuitarString.A, 4, false),
            new FretboardChartEntry(GuitarString.lowerE, 1, false),
            new FretboardChartEntry(GuitarString.lowerE, 2, false),
            new FretboardChartEntry(GuitarString.lowerE, 3, false),
            new FretboardChartEntry(GuitarString.lowerE, 4, false),
        ];
    }

    e(fretNumber: number) {
        this.setMarker(GuitarString.higherE, fretNumber);
        return this;
    }

    b(fretNumber: number) {
        this.setMarker(GuitarString.higherB, fretNumber);
        return this;
    }

    g(fretNumber: number) {
        this.setMarker(GuitarString.G, fretNumber);
        return this;
    }

    d(fretNumber: number) {
        this.setMarker(GuitarString.D, fretNumber);
        return this;
    }

    a(fretNumber: number) {
        this.setMarker(GuitarString.A, fretNumber);
        return this;
    }

    E(fretNumber: number) {
        this.setMarker(GuitarString.lowerE, fretNumber);
        return this;
    }

    active(guitarString: GuitarString) {
        // TODO: 06.04.2021 Mark the active guitar string with color
        return this;
    }

    build() {
        const fretsForGuitarString = guitarString =>
            this.fretboardChartEntries
                .filter(e => e.guitarString === guitarString)
                .map(e => {
                    return {
                        fretNumber: e.fretNumber,
                        hasMarker: e.hasMarker,
                    };
                });
        const guitarStringObject = guitarString =>
            <FretboardChartGuitarString>{
                tone: guitarString,
                frets: fretsForGuitarString(guitarString),
            };
        const fretboardChart: FretboardChart = {
            guitarStrings: [
                guitarStringObject(GuitarString.higherE),
                guitarStringObject(GuitarString.higherB),
                guitarStringObject(GuitarString.G),
                guitarStringObject(GuitarString.D),
                guitarStringObject(GuitarString.A),
                guitarStringObject(GuitarString.lowerE),
            ],
        };
        return fretboardChart;
    }

    private setMarker(guitarString: GuitarString, fretNumber: number) {
        if (fretNumber < 1) {
            console.warn(`Ignored fretboard marker: fretNumber = ${fretNumber} < 1.`);
            return;
        }
        if (fretNumber > this.numberOfFrets) {
            console.warn(
                `Ignored fretboard marker: fretNumber = ${fretNumber} > ${this.numberOfFrets}.`
            );
            return;
        }

        this.fretboardChartEntries.find(
            entry =>
                entry.guitarString === guitarString && entry.fretNumber === fretNumber
        ).hasMarker = true;
    }
}
