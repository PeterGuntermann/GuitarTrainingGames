import { Component } from "@angular/core";
import { GuitarString } from "../../models/guitar-string.enum";
import { Note } from "../../models/note.enum";
import { RollResult } from "../../models/roll-result.interface";
import { Scale } from "../../models/scale.enum";

@Component({
    selector: "room-layout",
    templateUrl: "./room-layout.component.html",
    styleUrls: ["./room-layout.component.scss"],
})
export class RoomLayoutComponent {
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
