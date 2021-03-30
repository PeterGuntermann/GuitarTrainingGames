import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GameScaleMachineComponent } from "./game-scale-machine.component";

describe("GameScalesComponent", () => {
    let component: GameScaleMachineComponent;
    let fixture: ComponentFixture<GameScaleMachineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GameScaleMachineComponent],
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
