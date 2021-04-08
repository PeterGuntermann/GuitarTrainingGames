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
        this.fretboardChart1 = new FretboardChartBuilder(6)
            .active(GuitarString.G)
            .build();

        this.fretboardChart2 = new FretboardChartBuilder()
            .b(2)
            .g(3)
            .d(3)
            .E(2)
            .showAllGuitarStringNames()
            .build();

        this.fretboardChart3 = new FretboardChartBuilder(5)
            .showAllGuitarStringNames()
            .E(2)
            .E(4)
            .a(2)
            .a(4)
            .d(2)
            .d(4)
            .g(1)
            .g(4)
            .b(2)
            .b(5)
            .e(2)
            .e(4)
            .build();
    }
}
