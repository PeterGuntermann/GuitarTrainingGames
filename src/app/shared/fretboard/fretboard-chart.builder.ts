import {
    FretboardChart,
    FretboardChartFret,
    FretboardChartGuitarString,
} from "./fretboard-chart";

export class FretboardChartBuilder {
    private readonly fretboardChart: FretboardChart;

    constructor(
        private readonly numberOfGuitarStrings = 6,
        private readonly numberOfFrets = 4
    ) {
        const initFret: FretboardChartFret = { hasMarker: false };
        const initFrets: FretboardChartFret[] = Array(numberOfFrets).fill(
            initFret
        );
        const initGuitarString: FretboardChartGuitarString = {
            frets: initFrets,
        };
        const initGuitarStrings: FretboardChartGuitarString[] = Array(
            numberOfGuitarStrings
        ).fill(initGuitarString);
        this.fretboardChart = { guitarStrings: initGuitarStrings };
    }

    e(fret: number) {
        // TODO: 14.02.2021 set marker
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
