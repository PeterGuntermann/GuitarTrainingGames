import { Component, OnInit } from "@angular/core";
import { GAME_CHORDS_ROOM } from "../../constants/game-rooms";
import { ChordType } from "../../models/chord-type.enum";
import { Note } from "../../models/note.enum";
import { RandomGeneratorService } from "../../services/random-generator.service";

interface RollResult {
    rootNote: Note;
    chordType: ChordType;
}

@Component({
    selector: "app-game-chords",
    templateUrl: "./game-chords.component.html",
    styleUrls: ["./game-chords.component.scss"],
})
export class GameChordsComponent implements OnInit {
    readonly ROOM = GAME_CHORDS_ROOM;

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
