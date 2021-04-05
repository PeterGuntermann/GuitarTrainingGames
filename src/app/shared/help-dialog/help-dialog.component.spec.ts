import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { HelpDialogComponent, HelpDialogData } from "./help-dialog.component";

const HELP_DIALOG_DATA: HelpDialogData = {
    howToPlaySteps: ["one", "two", "three"],
};

describe("HelpDialogComponent", () => {
    let component: HelpDialogComponent;
    let fixture: ComponentFixture<HelpDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HelpDialogComponent],
            imports: [MatDialogModule],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: HELP_DIALOG_DATA },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HelpDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
