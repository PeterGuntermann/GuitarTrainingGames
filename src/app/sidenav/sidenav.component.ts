import { Component, OnInit } from "@angular/core";
import {
    GAME_CHORDS_ROOM,
    GAME_NOTES_ROOM,
    GAME_SCALES_ROOM,
} from "../constants/game-rooms";
import { APP_NAME, APP_VERSION } from "../constants/globals";

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
    readonly GAME_CHORDS_ROOM = GAME_CHORDS_ROOM;
    readonly GAME_NOTES_ROOM = GAME_NOTES_ROOM;
    readonly GAME_SCALES_ROOM = GAME_SCALES_ROOM;
    readonly VERSION_INFO = `${APP_NAME} v${APP_VERSION}`;

    ngOnInit(): void {}
}
