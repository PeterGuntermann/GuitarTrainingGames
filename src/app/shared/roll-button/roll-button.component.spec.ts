import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material/icon";

import { RollButtonComponent } from "./roll-button.component";

describe("RollButtonComponent", () => {
    let component: RollButtonComponent;
    let fixture: ComponentFixture<RollButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RollButtonComponent],
            imports: [MatIconModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RollButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
