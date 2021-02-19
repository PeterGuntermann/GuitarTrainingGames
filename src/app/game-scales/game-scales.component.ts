import { Component, OnInit } from "@angular/core";
import { GameScalesRoom } from "../constants/game-rooms";

@Component({
    selector: "app-game-scales",
    templateUrl: "./game-scales.component.html",
    styleUrls: ["./game-scales.component.scss"],
})
export class GameScalesComponent implements OnInit {
    public readonly Room = GameScalesRoom;

    constructor() {}

    ngOnInit(): void {}
}
