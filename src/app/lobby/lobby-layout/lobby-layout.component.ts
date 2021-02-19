import { Component, OnInit } from "@angular/core";
import { gameRooms } from "../../constants/game-rooms";
import { RoomSelectorService } from "../../room-selector.service";

@Component({
    selector: "app-layout",
    templateUrl: "./lobby-layout.component.html",
    styleUrls: ["./lobby-layout.component.scss"],
})
export class LobbyLayoutComponent implements OnInit {
    public rooms = gameRooms;

    constructor(public readonly roomSelector: RoomSelectorService) {}

    ngOnInit(): void {}
}
