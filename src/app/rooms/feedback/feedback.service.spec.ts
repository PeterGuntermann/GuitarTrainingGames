import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { FeedbackService } from "./feedback.service";

describe("FeedbackService", () => {
    let service: FeedbackService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(FeedbackService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
