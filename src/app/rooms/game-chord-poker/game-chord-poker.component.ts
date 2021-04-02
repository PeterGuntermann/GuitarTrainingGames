import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { GAME_CHORD_POKER_ROOM } from "@constants/game-rooms";
import { ChordType } from "@models/chord-type.enum";
import { Note } from "@models/note.enum";
import { RandomGeneratorService } from "@services/random-generator.service";
import {
    HelpDialogComponent,
    HelpDialogData,
} from "@shared/help-dialog/help-dialog.component";

interface RollResult {
    rootNote: Note;
    chordType: ChordType;
}

@Component({
    selector: "app-game-chord-poker",
    templateUrl: "./game-chord-poker.component.html",
    styleUrls: ["./game-chord-poker.component.scss"],
})
export class GameChordPokerComponent implements OnInit {
    readonly ROOM = GAME_CHORD_POKER_ROOM;
    readonly HOW_TO_PLAY_STEPS: string[] = [
        "Click the button below to roll a random chord.",
        "Find at least one way to play that chord.",
        "Re-roll to get another chord.",
    ];

    rollResult: RollResult;

    constructor(
        private _randomGenerator: RandomGeneratorService,
        readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    roll(): void {
        this.rollResult = {
            rootNote: this._randomGenerator.randomNote(),
            chordType: this._randomGenerator.randomChordType(),
        };
    }

    onOpenHelpClick(): void {
        const dialogData: HelpDialogData = { howToPlaySteps: this.HOW_TO_PLAY_STEPS };
        const dialogConfig: MatDialogConfig = { data: dialogData };
        this.dialog.open(HelpDialogComponent, dialogConfig);
    }
}
