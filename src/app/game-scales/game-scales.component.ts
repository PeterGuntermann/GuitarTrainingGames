import { Component, OnInit } from "@angular/core";
import { GAME_SCALES_ROOM } from "../constants/game-rooms";

@Component({
    selector: "app-game-scales",
    templateUrl: "./game-scales.component.html",
    styleUrls: ["./game-scales.component.scss"],
})
export class GameScalesComponent implements OnInit {
    public readonly Room = GAME_SCALES_ROOM;

    constructor() {}

    ngOnInit(): void {}
}
