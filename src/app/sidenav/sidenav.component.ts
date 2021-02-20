import { Component, OnInit } from "@angular/core";
import { APP_NAME, APP_VERSION } from "../constants/globals";

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
    readonly VERSION_INFO = `${APP_NAME} v${APP_VERSION}`;

    ngOnInit(): void {}
}
