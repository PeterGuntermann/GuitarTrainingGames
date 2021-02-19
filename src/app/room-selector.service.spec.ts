import { TestBed } from "@angular/core/testing";

import { RoomSelectorService } from "./room-selector.service";

describe("GameSelectorService", () => {
    let service: RoomSelectorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RoomSelectorService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
