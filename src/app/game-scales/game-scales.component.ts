import { Component, OnInit } from "@angular/core";
import { GAME_SCALES_ROOM } from "../constants/game-rooms";
import { RollResult } from "../models/roll-result.interface";
import { RandomGeneratorService } from "../random-generator.service";

@Component({
    selector: "app-game-scales",
    templateUrl: "./game-scales.component.html",
    styleUrls: ["./game-scales.component.scss"],
})
export class GameScalesComponent implements OnInit {
    readonly ROOM = GAME_SCALES_ROOM;

    rollResult: RollResult;

    constructor(readonly randomGenerator: RandomGeneratorService) {}

    ngOnInit(): void {}

    roll() {
        this.rollResult = {
            rootNote: this.randomGenerator.randomNote(),
            scale: this.randomGenerator.randomScale(),
            guitarString: this.randomGenerator.randomGuitarString(),
        };
    }
}
