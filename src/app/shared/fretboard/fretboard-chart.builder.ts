import { GuitarString } from "@models/guitar-string.enum";
import {
    FretboardChart,
    FretboardChartEntry,
    FretboardChartGuitarString,
} from "./fretboard-chart";

export class FretboardChartBuilder {
    private readonly _fretboardChartEntries: FretboardChartEntry[];
    private readonly _activeGuitarStrings: Set<GuitarString>;
    private _showAllGuitarStringNames = false;

    constructor(private readonly _numberOfFrets = 4) {
        this._fretboardChartEntries = [];
        const guitarStrings = [
            GuitarString.higherE,
            GuitarString.higherB,
            GuitarString.G,
            GuitarString.D,
            GuitarString.A,
            GuitarString.lowerE,
        ];
        const fretNumbers = [...Array(_numberOfFrets).keys()].map(x => x + 1);

        guitarStrings.forEach(guitarString => {
            fretNumbers.forEach(fretNumber => {
                this._fretboardChartEntries.push(
                    new FretboardChartEntry(guitarString, fretNumber, false)
                );
            });
        });

        this._activeGuitarStrings = new Set<GuitarString>();
    }

    e(fretNumber: number): this {
        this.setMarker(GuitarString.higherE, fretNumber);
        return this;
    }

    b(fretNumber: number): this {
        this.setMarker(GuitarString.higherB, fretNumber);
        return this;
    }

    g(fretNumber: number): this {
        this.setMarker(GuitarString.G, fretNumber);
        return this;
    }

    d(fretNumber: number): this {
        this.setMarker(GuitarString.D, fretNumber);
        return this;
    }

    a(fretNumber: number): this {
        this.setMarker(GuitarString.A, fretNumber);
        return this;
    }

    E(fretNumber: number): this {
        this.setMarker(GuitarString.lowerE, fretNumber);
        return this;
    }

    active(guitarString: GuitarString): this {
        this._activeGuitarStrings.add(guitarString);
        return this;
    }

    showAllGuitarStringNames(): this {
        this._showAllGuitarStringNames = true;
        return this;
    }

    build(): FretboardChart {
        const fretsForGuitarString = guitarString =>
            this._fretboardChartEntries
                .filter(e => e.guitarString === guitarString)
                .map(e => {
                    return {
                        fretNumber: e.fretNumber,
                        hasMarker: e.hasMarker,
                    };
                });
        const guitarStringObject = (guitarString: GuitarString) =>
            <FretboardChartGuitarString>{
                tone: guitarString,
                frets: fretsForGuitarString(guitarString),
                isActive: this._activeGuitarStrings.has(guitarString),
            };
        return {
            guitarStrings: [
                guitarStringObject(GuitarString.higherE),
                guitarStringObject(GuitarString.higherB),
                guitarStringObject(GuitarString.G),
                guitarStringObject(GuitarString.D),
                guitarStringObject(GuitarString.A),
                guitarStringObject(GuitarString.lowerE),
            ],
            showAllGuitarStringNames: this._showAllGuitarStringNames,
            numberOfFrets: this._numberOfFrets,
        };
    }

    private setMarker(guitarString: GuitarString, fretNumber: number): void {
        if (fretNumber < 1) {
            console.warn(`Ignored fretboard marker: fretNumber = ${fretNumber} < 1.`);
            return;
        }
        if (fretNumber > this._numberOfFrets) {
            console.warn(
                `Ignored fretboard marker: fretNumber = ${fretNumber} > ${this._numberOfFrets}.`
            );
            return;
        }

        this._fretboardChartEntries.find(
            entry =>
                entry.guitarString === guitarString && entry.fretNumber === fretNumber
        ).hasMarker = true;
    }
}
