import { Component, OnInit } from "@angular/core";
import { GAME_NOTE_ROULETTE_ROOM } from "@constants/game-rooms";
import { GuitarString } from "@models/guitar-string.enum";
import { Note } from "@models/note.enum";
import { RandomGeneratorService } from "@services/random-generator.service";

interface RollResult {
    rootNote: Note;
    guitarString: GuitarString;
}

@Component({
    selector: "app-note-roulette",
    templateUrl: "./game-note-roulette.component.html",
    styleUrls: ["./game-note-roulette.component.scss"],
})
export class GameNoteRouletteComponent implements OnInit {
    public readonly ROOM = GAME_NOTE_ROULETTE_ROOM;

    rollResult: RollResult;

    constructor(readonly randomGenerator: RandomGeneratorService) {}

    ngOnInit(): void {}

    roll() {
        this.rollResult = {
            rootNote: this.randomGenerator.randomNote(),
            guitarString: this.randomGenerator.randomGuitarStringForNotes(),
        };
    }

    onOpenHelpClick() {
        // TODO: 01.04.2021 Open dialog
        console.log("clicked!");
    }
}
