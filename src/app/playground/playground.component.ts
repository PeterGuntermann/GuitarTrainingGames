import { Component, OnInit } from "@angular/core";
import { GuitarString } from "@models/guitar-string.enum";
import { FretboardChart } from "@shared/fretboard/fretboard-chart";
import { FretboardChartBuilder } from "@shared/fretboard/fretboard-chart.builder";

@Component({
    selector: "app-playground",
    templateUrl: "./playground.component.html",
    styleUrls: ["./playground.component.scss"],
})
export class PlaygroundComponent implements OnInit {
    fretboardChart: FretboardChart;

    constructor() {}

    ngOnInit(): void {
        this.fretboardChart = new FretboardChartBuilder()
            // .e(2)
            // .b(1)
            // .g(4)
            // .d(3)
            // .a(1)
            // .E(4)
            .active(GuitarString.G)
            .build();
    }
}
