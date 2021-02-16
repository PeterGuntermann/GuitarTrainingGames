import { Component, Input, OnInit } from "@angular/core";
import { FretboardChart } from "./fretboard-chart";
import { fretboardChartDummy } from "./fretboard-chart-dummy";
import { FretboardChartBuilder } from "./fretboard-chart.builder";

@Component({
    selector: "shared-fretboard",
    templateUrl: "./fretboard.component.html",
    styleUrls: ["./fretboard.component.scss"],
})
export class FretboardComponent implements OnInit {
    @Input() fretboardChart: FretboardChart = fretboardChartDummy;

    // guitarStrings: number[];
    // frets: number[];
    // fretboardLabels: string[];

    ngOnInit() {
        this.fretboardChart = new FretboardChartBuilder()
            .e(2)
            .b(1)
            .g(4)
            .d(3)
            .a(1)
            .E(3)
            .E(4)
            .build();

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
