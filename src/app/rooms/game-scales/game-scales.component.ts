import { Component, OnInit } from "@angular/core";
import { GAME_SCALES_ROOM } from "../../constants/game-rooms";
import { GuitarString } from "../../models/guitar-string.enum";
import { Note } from "../../models/note.enum";
import { Scale } from "../../models/scale.enum";
import { RandomGeneratorService } from "../../random-generator.service";

interface RollResult {
    rootNote: Note;
    scale: Scale;
    guitarString: GuitarString;
}

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
            guitarString: this.randomGenerator.randomGuitarStringForScales(),
        };
    }
}
