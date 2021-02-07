import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { LobbyHeaderComponent } from "./lobby-header.component";

describe("HeaderComponent", () => {
    let component: LobbyHeaderComponent;
    let fixture: ComponentFixture<LobbyHeaderComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [LobbyHeaderComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(LobbyHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
