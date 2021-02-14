import { Injectable } from "@angular/core";

// TODO: 13.02.2021 Create all the layouts in this style (JSON)
const dummyLayout: string[] = [
    "---o-",
    "-o---",
    "---o-",
    "--o--",
    "o--o-",
    "----o",
];

@Injectable({
    providedIn: "root",
})
export class FretboardChartProviderService {
    constructor() {}
}
