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
    fretboardChart1: FretboardChart;
    fretboardChart2: FretboardChart;
    fretboardChart3: FretboardChart;

    constructor() {}

    ngOnInit(): void {
        this.fretboardChart1 = new FretboardChartBuilder().active(GuitarString.G).build();

        this.fretboardChart2 = new FretboardChartBuilder()
            .b(2)
            .g(3)
            .d(3)
            .E(2)
            .showAllGuitarStringNames()
            .build();

        this.fretboardChart3 = new FretboardChartBuilder()
            .showAllGuitarStringNames()
            .E(4)
            .E(1)
            .a(3)
            .d(1)
            .d(3)
            .g(1)
            .b(1)
            .b(4)
            .e(1)
            .e(4)
            .build();
    }
}
