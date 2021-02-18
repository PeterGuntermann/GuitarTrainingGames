import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GameScalesComponent } from "./game-scales.component";

describe("GameScalesComponent", () => {
    let component: GameScalesComponent;
    let fixture: ComponentFixture<GameScalesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GameScalesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GameScalesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
