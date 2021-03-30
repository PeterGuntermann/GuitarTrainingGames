import { Component, OnInit } from "@angular/core";
import { GAME_CHORD_POKER_ROOM } from "../../constants/game-rooms";
import { ChordType } from "../../models/chord-type.enum";
import { Note } from "../../models/note.enum";
import { RandomGeneratorService } from "../../services/random-generator.service";

interface RollResult {
    rootNote: Note;
    chordType: ChordType;
}

@Component({
    selector: "app-game-chord-poker",
    templateUrl: "./game-chord-poker.component.html",
    styleUrls: ["./game-chord-poker.component.scss"],
})
export class GameChordPokerComponent implements OnInit {
    readonly ROOM = GAME_CHORD_POKER_ROOM;

    rollResult: RollResult;

    constructor(private _randomGenerator: RandomGeneratorService) {}

    ngOnInit(): void {}

    roll(): void {
        this.rollResult = {
            rootNote: this._randomGenerator.randomNote(),
            chordType: this._randomGenerator.randomChordType(),
        };
    }
}
