import { Component, OnInit } from "@angular/core";
import { GAME_CHORDS_ROOM } from "../constants/game-rooms";

@Component({
    selector: "app-game-chords",
    templateUrl: "./game-chords.component.html",
    styleUrls: ["./game-chords.component.scss"],
})
export class GameChordsComponent implements OnInit {
    public readonly Room = GAME_CHORDS_ROOM;

    constructor() {}

    ngOnInit(): void {}
}
