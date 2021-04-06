import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterTestingModule } from "@angular/router/testing";
import { RollButtonComponent } from "@shared/roll-button/roll-button.component";
import { ValueDisplayComponent } from "@shared/value-display/value-display.component";
import { RoomHeaderComponent } from "../../room-header/room-header.component";
import { GameChordPokerComponent } from "./game-chord-poker.component";

describe("GameChordsComponent", () => {
    let component: GameChordPokerComponent;
    let fixture: ComponentFixture<GameChordPokerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                GameChordPokerComponent,
                RollButtonComponent,
                RoomHeaderComponent,
                ValueDisplayComponent,
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
        fixture = TestBed.createComponent(GameChordPokerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
