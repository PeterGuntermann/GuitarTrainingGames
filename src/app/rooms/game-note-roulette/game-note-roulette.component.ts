import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { GAME_NOTE_ROULETTE_ROOM } from "@constants/game-rooms";
import { GuitarString } from "@models/guitar-string.enum";
import { Note } from "@models/note.enum";
import { RandomGeneratorService } from "@services/random-generator.service";
import { FretboardChart } from "@shared/fretboard/fretboard-chart";
import { FretboardChartBuilder } from "@shared/fretboard/fretboard-chart.builder";
import {
    HelpDialogComponent,
    HelpDialogData,
} from "@shared/help-dialog/help-dialog.component";

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
    readonly ROOM = GAME_NOTE_ROULETTE_ROOM;
    readonly HOW_TO_PLAY_STEPS: string[] = [
        "Click the button below to roll a note and a string.",
        "Find and play the note on the displayed string.",
        "Re-roll to get another note.",
    ];

    rollResult: RollResult;
    fretboardChart: FretboardChart;

    constructor(
        readonly randomGenerator: RandomGeneratorService,
        readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    roll(): void {
        this.rollResult = {
            rootNote: this.randomGenerator.randomNote(),
            guitarString: this.randomGenerator.randomGuitarStringForNotes(),
        };
        this.fretboardChart = new FretboardChartBuilder()
            .active(this.rollResult.guitarString)
            .build();
    }

    onOpenHelpClick(): void {
        const dialogData: HelpDialogData = { howToPlaySteps: this.HOW_TO_PLAY_STEPS };
        const dialogConfig: MatDialogConfig = { data: dialogData };
        this.dialog.open(HelpDialogComponent, dialogConfig);
    }
}
