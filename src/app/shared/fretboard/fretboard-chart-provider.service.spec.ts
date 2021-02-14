import { TestBed } from "@angular/core/testing";

import { FretboardChartProviderService } from "./fretboard-chart-provider.service";

describe("FretboardChartProviderService", () => {
    let service: FretboardChartProviderService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FretboardChartProviderService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
