import { Component, OnInit } from "@angular/core";
import { GAME_ROOMS } from "../constants/game-rooms";
import { APP_NAME } from "../constants/globals";

@Component({
    selector: "app-layout",
    templateUrl: "./lobby.component.html",
    styleUrls: ["./lobby.component.scss"],
})
export class LobbyComponent implements OnInit {
    readonly APP_NAME = APP_NAME;
    readonly ROOMS = GAME_ROOMS;

    constructor() {}

    ngOnInit(): void {}
}
