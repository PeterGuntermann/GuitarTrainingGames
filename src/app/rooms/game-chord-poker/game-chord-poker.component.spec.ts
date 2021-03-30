import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GameChordPokerComponent } from "./game-chord-poker.component";

describe("GameChordsComponent", () => {
    let component: GameChordPokerComponent;
    let fixture: ComponentFixture<GameChordPokerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GameChordPokerComponent],
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
