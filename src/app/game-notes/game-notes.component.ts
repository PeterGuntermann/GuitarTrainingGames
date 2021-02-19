import { Component, OnInit } from "@angular/core";
import { GameNotesRoom } from "../constants/game-rooms";

@Component({
    selector: "app-game-notes",
    templateUrl: "./game-notes.component.html",
    styleUrls: ["./game-notes.component.scss"],
})
export class GameNotesComponent implements OnInit {
    public readonly Room = GameNotesRoom;

    constructor() {}

    ngOnInit(): void {}
}
