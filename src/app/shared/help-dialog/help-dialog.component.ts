import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

export interface HelpDialogData {
    howToPlaySteps: string[];
}

@Component({
    selector: "app-help-dialog",
    templateUrl: "./help-dialog.component.html",
    styleUrls: ["./help-dialog.component.scss"],
})
export class HelpDialogComponent implements OnInit {
    constructor(
        readonly dialogRef: MatDialogRef<HelpDialogComponent>,
        @Inject(MAT_DIALOG_DATA) readonly data: HelpDialogData
    ) {}

    ngOnInit(): void {}

    onCloseClick(): void {
        this.dialogRef.close();
    }
}
