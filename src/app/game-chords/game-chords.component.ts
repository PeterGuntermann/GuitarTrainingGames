import { Component, OnInit } from "@angular/core";
import { GameChordsRoom } from "../constants/game-rooms";

@Component({
    selector: "app-game-chords",
    templateUrl: "./game-chords.component.html",
    styleUrls: ["./game-chords.component.scss"],
})
export class GameChordsComponent implements OnInit {
    public readonly Room = GameChordsRoom;

    constructor() {}

    ngOnInit(): void {}
}
