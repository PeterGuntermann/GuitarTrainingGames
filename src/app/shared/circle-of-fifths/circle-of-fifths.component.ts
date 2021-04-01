import { Component, Input } from "@angular/core";
import { Note } from "@models/note.enum";

@Component({
    selector: "app-circle-of-fifths",
    templateUrl: "./circle-of-fifths.component.html",
    styleUrls: ["./circle-of-fifths.component.scss"],
})
export class CircleOfFifthsComponent {
    // counting clock-wise, starting at the top position
    readonly noteBubbles: { className: string; note: Note }[] = [
        { className: "note-C", note: Note.C },
        { className: "note-G", note: Note.G },
        { className: "note-D", note: Note.D },
        { className: "note-A", note: Note.A },
        { className: "note-E", note: Note.E },
        { className: "note-B", note: Note.B },
        { className: "note-G-flat", note: Note.Fsharp_Gflat },
        { className: "note-D-flat", note: Note.Csharp_Dflat },
        { className: "note-A-flat", note: Note.Gsharp_Aflat },
        { className: "note-E-flat", note: Note.Dsharp_Eflat },
        { className: "note-B-flat", note: Note.Asharp_Bflat },
        { className: "note-F", note: Note.F },
    ];

    @Input() displayedNote: Note;

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
}
