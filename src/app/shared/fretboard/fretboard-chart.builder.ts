import { FretboardChart } from "./fretboard-chart";

export class FretboardChartBuilder {
    private fretboardChart: FretboardChart;

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
