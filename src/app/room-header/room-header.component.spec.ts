import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterTestingModule } from "@angular/router/testing";

import { RoomHeaderComponent } from "./room-header.component";

describe("RoomHeaderComponent", () => {
    let component: RoomHeaderComponent;
    let fixture: ComponentFixture<RoomHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RoomHeaderComponent],
            imports: [MatIconModule, MatToolbarModule, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
