import { Component, OnInit } from "@angular/core";
import { GAME_NOTES_ROOM } from "../../constants/game-rooms";
import { GuitarString } from "../../models/guitar-string.enum";
import { Note } from "../../models/note.enum";
import { RandomGeneratorService } from "../../services/random-generator.service";

interface RollResult {
    rootNote: Note;
    guitarString: GuitarString;
}

@Component({
    selector: "app-game-notes",
    templateUrl: "./game-notes.component.html",
    styleUrls: ["./game-notes.component.scss"],
})
export class GameNotesComponent implements OnInit {
    public readonly ROOM = GAME_NOTES_ROOM;

    rollResult: RollResult;

    constructor(readonly randomGenerator: RandomGeneratorService) {}

    ngOnInit(): void {}

    roll() {
        this.rollResult = {
            rootNote: this.randomGenerator.randomNote(),
            guitarString: this.randomGenerator.randomGuitarStringForNotes(),
        };
    }
}
