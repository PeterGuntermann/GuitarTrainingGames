import { Component, OnInit } from "@angular/core";
import { GAME_ROOMS } from "../../constants/game-rooms";
import { RoomSelectorService } from "../../room-selector.service";

@Component({
    selector: "app-layout",
    templateUrl: "./lobby-layout.component.html",
    styleUrls: ["./lobby-layout.component.scss"],
})
export class LobbyLayoutComponent implements OnInit {
    public rooms = GAME_ROOMS;

    constructor(public readonly roomSelector: RoomSelectorService) {}

    ngOnInit(): void {}
}
