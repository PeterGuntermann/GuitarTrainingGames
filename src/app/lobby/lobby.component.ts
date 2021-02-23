import { Component, OnInit } from "@angular/core";
import { APP_NAME } from "../constants/globals";

@Component({
    selector: "app-layout",
    templateUrl: "./lobby.component.html",
    styleUrls: ["./lobby.component.scss"],
})
export class LobbyComponent implements OnInit {
    readonly APP_NAME = APP_NAME;

    constructor() {}

    ngOnInit(): void {}
}
