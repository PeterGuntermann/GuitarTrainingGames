import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GameNoteRouletteComponent } from "./game-note-roulette.component";

describe("GameNotesComponent", () => {
    let component: GameNoteRouletteComponent;
    let fixture: ComponentFixture<GameNoteRouletteComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GameNoteRouletteComponent],
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
