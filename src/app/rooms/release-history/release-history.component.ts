import { Component, OnInit } from "@angular/core";
import { VERSION_HISTORY } from "@constants/version-history";
import { VersionInfo } from "@models/version-info.interface";

@Component({
    selector: "app-release-history",
    templateUrl: "./release-history.component.html",
    styleUrls: ["./release-history.component.scss"],
})
export class ReleaseHistoryComponent implements OnInit {
    constructor() {}

    versions: VersionInfo[];

    ngOnInit(): void {
        this.versions = VERSION_HISTORY;
    }
}
