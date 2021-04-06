import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterTestingModule } from "@angular/router/testing";
import { RollButtonComponent } from "@shared/roll-button/roll-button.component";
import { ValueDisplayComponent } from "@shared/value-display/value-display.component";
import { RoomHeaderComponent } from "../../room-header/room-header.component";
import { GameScaleMachineComponent } from "./game-scale-machine.component";

describe("GameScalesComponent", () => {
    let component: GameScaleMachineComponent;
    let fixture: ComponentFixture<GameScaleMachineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                GameScaleMachineComponent,
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
        fixture = TestBed.createComponent(GameScaleMachineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
