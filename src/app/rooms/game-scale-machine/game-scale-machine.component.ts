import { Component, OnInit } from "@angular/core";
import { GAME_SCALE_MACHINE_ROOM } from "@constants/game-rooms";
import { GuitarString } from "@models/guitar-string.enum";
import { Note } from "@models/note.enum";
import { Scale } from "@models/scale.enum";
import { RandomGeneratorService } from "@services/random-generator.service";

interface RollResult {
    rootNote: Note;
    scale: Scale;
    guitarString: GuitarString;
}

@Component({
    selector: "app-game-scale-machine",
    templateUrl: "./game-scale-machine.component.html",
    styleUrls: ["./game-scale-machine.component.scss"],
})
export class GameScaleMachineComponent implements OnInit {
    readonly ROOM = GAME_SCALE_MACHINE_ROOM;

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
