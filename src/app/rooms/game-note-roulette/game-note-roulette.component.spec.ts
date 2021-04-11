import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterTestingModule } from "@angular/router/testing";
import { CircleOfFifthsComponent } from "@shared/circle-of-fifths/circle-of-fifths.component";
import { FretboardComponent } from "@shared/fretboard/fretboard.component";
import { RollButtonComponent } from "@shared/roll-button/roll-button.component";
import { ValueDisplayComponent } from "@shared/value-display/value-display.component";
import { RoomHeaderComponent } from "../../room-header/room-header.component";
import { GameNoteRouletteComponent } from "./game-note-roulette.component";

describe("GameNotesComponent", () => {
    let component: GameNoteRouletteComponent;
    let fixture: ComponentFixture<GameNoteRouletteComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                GameNoteRouletteComponent,
                CircleOfFifthsComponent,
                RollButtonComponent,
                RoomHeaderComponent,
                ValueDisplayComponent,
                FretboardComponent,
            ],
            imports: [
                MatCardModule,
                MatDialogModule,
                MatIconModule,
                MatToolbarModule,
                RouterTestingModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GameNoteRouletteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
