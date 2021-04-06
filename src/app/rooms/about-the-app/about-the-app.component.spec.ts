import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterTestingModule } from "@angular/router/testing";
import { RoomHeaderComponent } from "../../room-header/room-header.component";

import { AboutTheAppComponent } from "./about-the-app.component";

describe("AboutTheAppComponent", () => {
    let component: AboutTheAppComponent;
    let fixture: ComponentFixture<AboutTheAppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AboutTheAppComponent, RoomHeaderComponent],
            imports: [
                MatCardModule,
                MatIconModule,
                MatToolbarModule,
                RouterTestingModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutTheAppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
