import { Component, OnInit } from "@angular/core";
import { Note } from "../../models/note.enum";

@Component({
    selector: "app-circle-of-fifths",
    templateUrl: "./circle-of-fifths.component.html",
    styleUrls: ["./circle-of-fifths.component.scss"],
})
export class CircleOfFifthsComponent implements OnInit {
    displayedNote: Note;

    get imageSource(): string {
        const folderPath = "assets/images/notes";
        const filePath = fileName => `${folderPath}/${fileName}.png`;

        switch (this.displayedNote) {
            case Note.C:
                return filePath("C");
            case Note.Csharp_Dflat:
                return filePath("Db");
            case Note.D:
                return filePath("D");
            case Note.Dsharp_Eflat:
                return filePath("Eb");
            case Note.E:
                return filePath("E");
            case Note.F:
                return filePath("F");
            case Note.Fsharp_Gflat:
                return filePath("Gb");
            case Note.G:
                return filePath("G");
            case Note.Gsharp_Aflat:
                return filePath("Ab");
            case Note.Asharp_Bflat:
                return filePath("Bb");
            case Note.B:
                return filePath("B");
            case Note.A:
                return filePath("A");
        }
    }

    ngOnInit(): void {
        this.displayedNote = Note.Fsharp_Gflat;
    }
}
