import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LobbyLayoutComponent } from "./lobby-layout.component";

describe("LayoutComponent", () => {
    let component: LobbyLayoutComponent;
    let fixture: ComponentFixture<LobbyLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LobbyLayoutComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LobbyLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
