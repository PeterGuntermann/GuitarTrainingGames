import { Component, Input, OnInit } from "@angular/core";

// TODO: 13.02.2021 Create all the layouts in this style (JSON)
const dummyLayout: string[] = [
    "---o-",
    "-o---",
    "---o-",
    "--o--",
    "o--o-",
    "----o",
];

// TODO: 13.02.2021 Create a service that creates those objects
export interface FretboardChart {
    guitarStrings: {
        // emptyStringTone: GuitarString;
        frets: {
            hasMarker: boolean;
        }[];
    }[];
}

export const fretboardChartDummy: FretboardChart = {
    guitarStrings: [
        {
            frets: [
                { hasMarker: false },
                { hasMarker: false },
                { hasMarker: true },
                { hasMarker: false },
            ],
        },
        {
            frets: [
                { hasMarker: false },
                { hasMarker: false },
                { hasMarker: false },
                { hasMarker: true },
            ],
        },
        {
            frets: [
                { hasMarker: true },
                { hasMarker: false },
                { hasMarker: false },
                { hasMarker: false },
            ],
        },
        {
            frets: [
                { hasMarker: true },
                { hasMarker: false },
                { hasMarker: true },
                { hasMarker: false },
            ],
        },
        {
            frets: [
                { hasMarker: true },
                { hasMarker: false },
                { hasMarker: true },
                { hasMarker: true },
            ],
        },
        {
            frets: [
                { hasMarker: true },
                { hasMarker: true },
                { hasMarker: false },
                { hasMarker: true },
            ],
        },
    ],
};

@Component({
    selector: "shared-fretboard",
    templateUrl: "./fretboard.component.html",
    styleUrls: ["./fretboard.component.scss"],
})
export class FretboardComponent implements OnInit {
    @Input() numberOfStrings = 6;
    @Input() numberOfFrets = 5;
    @Input() fretboardChart: FretboardChart = fretboardChartDummy;

    // guitarStrings: number[];
    // frets: number[];
    // fretboardLabels: string[];

    ngOnInit() {
        // this.guitarStrings = [...Array(this.numberOfStrings).keys()]
        //     .map(f => f + 1)
        //     .reverse();
        // this.frets = [...Array(this.numberOfFrets).keys()].map(f => f + 1);
        // this.fretboardLabels = this.getFretboardLabels();
    }

    // private getFretboardLabels() {
    //     return this.frets.map(fret => {
    //         switch (fret) {
    //             case 3:
    //                 return "III";
    //             case 5:
    //                 return "V";
    //             case 7:
    //                 return "VII";
    //             case 9:
    //                 return "IX";
    //             case 12:
    //                 return "XII";
    //             case 15:
    //                 return "XV";
    //             case 17:
    //                 return "XVII";
    //             case 19:
    //                 return "IXX";
    //             default:
    //                 return "";
    //         }
    //     });
    // }
}
