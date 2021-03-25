import { Component, OnInit } from "@angular/core";
import { Note } from "../../models/note.enum";

@Component({
    selector: "app-circle-of-fifths",
    templateUrl: "./circle-of-fifths.component.html",
    styleUrls: ["./circle-of-fifths.component.scss"],
})
export class CircleOfFifthsComponent implements OnInit {
    displayedNote: Note;
    imgSource = "assets/images/notes/Ab.png";

    get imageSource(): string {
        let filename: string;
        // TODO: 25.03.2021 Use early returns
        switch (this.displayedNote) {
            case Note.C:
                filename = "C";
                break;
            case Note.Csharp_Dflat:
                filename = "Db";
                break;
            case Note.D:
                filename = "D";
                break;
            case Note.Dsharp_Eflat:
                filename = "Eb";
                break;
            case Note.E:
                filename = "E";
                break;
            case Note.F:
                filename = "F";
                break;
            case Note.Fsharp_Gflat:
                filename = "Gb";
                break;
            case Note.G:
                filename = "G";
                break;
            case Note.Gsharp_Aflat:
                filename = "Ab";
                break;
            case Note.Asharp_Bflat:
                filename = "Bb";
                break;
            case Note.B:
                filename = "B";
                break;
            case Note.A:
                filename = "A";
        }
        return `assets/images/notes/${filename}.png`;
    }

    constructor() {}

    ngOnInit(): void {
        this.displayedNote = Note.Fsharp_Gflat;
    }
}
