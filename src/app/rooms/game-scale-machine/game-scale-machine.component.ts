import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { GAME_SCALE_MACHINE_ROOM } from "@constants/game-rooms";
import { GuitarString } from "@models/guitar-string.enum";
import { Note } from "@models/note.enum";
import { Scale } from "@models/scale.enum";
import { RandomGeneratorService } from "@services/random-generator.service";
import {
    HelpDialogComponent,
    HelpDialogData,
} from "@shared/help-dialog/help-dialog.component";

interface RollResult {
    rootNote: Note;
    scale: Scale;
    guitarString: GuitarString;
}

@Component({
    selector: "app-game-scale-machine",
    templateUrl: "./game-scale-machine.component.html",
    styleUrls: ["./game-scale-machine.component.scss"],
})
export class GameScaleMachineComponent implements OnInit {
    readonly ROOM = GAME_SCALE_MACHINE_ROOM;
    readonly HOW_TO_PLAY_STEPS: string[] = [
        "Click the button below to roll a mode, a root node and a string to start on.",
        "Play the first 9 notes of that mode up and down again.",
        "Re-roll to get another mode.",
    ];

    rollResult: RollResult;

    constructor(
        readonly randomGenerator: RandomGeneratorService,
        readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    roll(): void {
        this.rollResult = {
            rootNote: this.randomGenerator.randomNote(),
            scale: this.randomGenerator.randomScale(),
            guitarString: this.randomGenerator.randomGuitarStringForScales(),
        };
    }

    onOpenHelpClick(): void {
        const dialogData: HelpDialogData = { howToPlaySteps: this.HOW_TO_PLAY_STEPS };
        const dialogConfig: MatDialogConfig = { data: dialogData };
        this.dialog.open(HelpDialogComponent, dialogConfig);
    }
}
