import { Component, OnInit } from "@angular/core";
import { GAME_CHORDS_ROOM } from "../../constants/game-rooms";
import { ChordType } from "../../models/chord-type.enum";
import { Note } from "../../models/note.enum";
import { RandomGeneratorService } from "../../services/random-generator.service";

interface RollResult {
    rootNote: Note;
    chord: any; // TODO: 25.02.2021 new interface
}

@Component({
    selector: "app-game-chords",
    templateUrl: "./game-chords.component.html",
    styleUrls: ["./game-chords.component.scss"],
})
export class GameChordsComponent implements OnInit {
    public readonly ROOM = GAME_CHORDS_ROOM;

    rollResult: RollResult;

    constructor(private randomGenerator: RandomGeneratorService) {}

    ngOnInit(): void {
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
        console.log(this.randomGenerator.chooseFromEnum(ChordType));
    }

    roll() {
        // TODO: 25.02.2021 Choose randomly
        this.rollResult = {
            rootNote: Note.Asharp_Bflat,
            chord: "maj",
        };
    }
}
