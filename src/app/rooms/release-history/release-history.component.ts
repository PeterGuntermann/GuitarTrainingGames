import { Component, OnInit } from "@angular/core";

interface Version {
    versionNumber: string;
    features: string[];
}

@Component({
    selector: "app-release-history",
    templateUrl: "./release-history.component.html",
    styleUrls: ["./release-history.component.scss"],
})
export class ReleaseHistoryComponent implements OnInit {
    constructor() {}

    versions: Version[];

    ngOnInit(): void {
        this.versions = [];
        this.versions.push({
            versionNumber: "v1.0",
            features: [
                "Three simple games based on random generators: Notes, Chords, Scales",
                "Lobby with quick navigation",
                "Side menu with navigation",
                "Material Design",
            ],
        });
    }
}
