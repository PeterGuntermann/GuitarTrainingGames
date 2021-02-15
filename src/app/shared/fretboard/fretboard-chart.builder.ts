import { GuitarString } from "../../models/guitar-string.enum";
import {
    FretboardChart,
    FretboardChartFret,
    FretboardChartGuitarString,
} from "./fretboard-chart";

export class FretboardChartBuilder {
    private readonly fretboardChart: FretboardChart;

    constructor(private readonly numberOfFrets = 4) {
        const initFrets: FretboardChartFret[] = [
            ...Array(numberOfFrets).keys(),
        ].map(
            index =>
                <FretboardChartFret>{
                    fretNumber: index + 1,
                    hasMarker: false,
                }
        );
        const initGuitarStrings: FretboardChartGuitarString[] = [
            { tone: GuitarString.higherE, frets: initFrets },
            { tone: GuitarString.higherB, frets: initFrets },
            { tone: GuitarString.G, frets: initFrets },
            { tone: GuitarString.D, frets: initFrets },
            { tone: GuitarString.A, frets: initFrets },
            { tone: GuitarString.lowerE, frets: initFrets },
        ];
        this.fretboardChart = { guitarStrings: initGuitarStrings };
        console.log(this.fretboardChart);
    }

    e(fretNumber: number) {
        // TODO: 14.02.2021 set marker
        const guitarString = this.fretboardChart.guitarStrings.find(
            guitarString => guitarString.tone === GuitarString.higherE
        );
        const index = guitarString.frets.findIndex(
            fret => fret.fretNumber === fretNumber
        );
        guitarString.frets[index].hasMarker = true;
        // guitarString.frets.forEach(fret => {
        //     fret.hasMarker = fret.fretNumber === fretNumber;
        //     console.log(fret);
        // });

        // TODO: 15.02.2021 Somehow it sets the marker for ALL guitar strings??!
        // const fret = this.fretboardChart.guitarStrings
        //     .find(guitarString => guitarString.tone === GuitarString.higherE)
        //     ?.frets.find(fret => fret.fretNumber === fretNumber);
        // if (fret !== undefined) fret.hasMarker = true;
        console.log(this.fretboardChart);
        return this;
    }

    b(fret: number) {
        // TODO: 14.02.2021 set marker
        return this;
    }

    g(fret: number) {
        // TODO: 14.02.2021 set marker
        return this;
    }

    d(fret: number) {
        // TODO: 14.02.2021 set marker
        return this;
    }

    a(fret: number) {
        // TODO: 14.02.2021 set marker
        return this;
    }

    E(fret: number) {
        // TODO: 14.02.2021 set marker
        return this;
    }

    build() {
        return this.fretboardChart;
    }
}
