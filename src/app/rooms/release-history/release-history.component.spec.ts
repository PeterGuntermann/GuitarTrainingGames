import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterTestingModule } from "@angular/router/testing";
import { RoomHeaderComponent } from "../../room-header/room-header.component";

import { ReleaseHistoryComponent } from "./release-history.component";

describe("ReleaseHistoryComponent", () => {
    let component: ReleaseHistoryComponent;
    let fixture: ComponentFixture<ReleaseHistoryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReleaseHistoryComponent, RoomHeaderComponent],
            imports: [
                MatCardModule,
                MatIconModule,
                MatToolbarModule,
                RouterTestingModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ReleaseHistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
