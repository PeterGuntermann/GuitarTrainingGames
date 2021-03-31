import { Component, OnInit } from "@angular/core";
import { GAME_ROOMS } from "@constants/game-rooms";
import { APP_NAME, APP_VERSION } from "@constants/globals";

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
    readonly GAME_ROOMS = GAME_ROOMS;
    readonly VERSION_INFO = `${APP_NAME} v${APP_VERSION}`;

    ngOnInit(): void {}
}
