import { Component, OnInit } from "@angular/core";
import { GAME_ROOMS } from "@constants/game-rooms";
import { RoomSelectorService } from "@services/room-selector.service";

@Component({
    selector: "app-room-carousel",
    templateUrl: "./room-carousel.component.html",
    styleUrls: ["./room-carousel.component.scss"],
})
export class RoomCarouselComponent implements OnInit {
    readonly ROOMS = GAME_ROOMS;

    constructor(public readonly roomSelector: RoomSelectorService) {}

    ngOnInit(): void {}
}
