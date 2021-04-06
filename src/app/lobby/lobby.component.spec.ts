import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { LobbyHeaderComponent } from "./lobby-header/lobby-header.component";

import { LobbyComponent } from "./lobby.component";

describe("LayoutComponent", () => {
    let component: LobbyComponent;
    let fixture: ComponentFixture<LobbyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LobbyComponent, LobbyHeaderComponent, SidenavComponent],
            imports: [
                MatCardModule,
                MatIconModule,
                MatListModule,
                MatSidenavModule,
                MatToolbarModule,
                NoopAnimationsModule,
                RouterTestingModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LobbyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
