import { Component } from "@angular/core";
import { GuitarString } from "./types/guitar-string.enum";
import { Note } from "./types/note.enum";
import { RollResult } from "./types/roll-result.interface";
import { Scale } from "./types/scale.enum";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    rollResult: RollResult;

    roll() {
        this.rollResult = {
            rootNote: this.randomNote(),
            scale: this.randomScale(),
            guitarString: this.randomGuitarString(),
        };
    }

    reset() {
        this.rollResult = undefined;
    }

    private randomNote(): Note {
        const enumKeys = Object.keys(Note);
        const randomInteger = this.randomInteger(0, 11);
        return Note[enumKeys[randomInteger]];
    }

    private randomScale(): Scale {
        const enumKeys = Object.keys(Scale);
        const randomInteger = this.randomInteger(0, 6);
        return Scale[enumKeys[randomInteger]];
    }

    private randomGuitarString(): GuitarString {
        const enumKeys = Object.keys(GuitarString);
        const randomInteger = this.randomInteger(0, 4);
        return GuitarString[enumKeys[randomInteger]];
    }

    private randomInteger(from: number, to: number) {
        return Math.floor(Math.random() * (to + 1) + from);
    }
}
