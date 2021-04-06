import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { RouterTestingModule } from "@angular/router/testing";
import { RoomSelectorService } from "@services/room-selector.service";

import { RoomCarouselComponent } from "./room-carousel.component";

describe("RoomCarouselComponent", () => {
    let component: RoomCarouselComponent;
    let fixture: ComponentFixture<RoomCarouselComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RoomCarouselComponent],
            imports: [MatCardModule, MatIconModule, RouterTestingModule],
            providers: [RoomSelectorService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
