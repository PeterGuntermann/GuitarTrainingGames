import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GameChordsComponent } from "./game-chords.component";

describe("GameChordsComponent", () => {
    let component: GameChordsComponent;
    let fixture: ComponentFixture<GameChordsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GameChordsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GameChordsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
