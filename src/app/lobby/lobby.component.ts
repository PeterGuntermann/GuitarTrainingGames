import { Component, OnInit } from "@angular/core";
import { GAME_ROOMS } from "../constants/game-rooms";
import { RoomSelectorService } from "../room-selector.service";

@Component({
    selector: "app-layout",
    templateUrl: "./lobby.component.html",
    styleUrls: ["./lobby.component.scss"],
})
export class LobbyComponent implements OnInit {
    public rooms = GAME_ROOMS;

    constructor(public readonly roomSelector: RoomSelectorService) {}

    ngOnInit(): void {}
}
