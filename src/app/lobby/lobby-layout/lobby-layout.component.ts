import { Component, OnInit } from "@angular/core";
import { gameRooms } from "../../constants/game-rooms";
import { Room } from "../../models/room.interface";

@Component({
    selector: "app-layout",
    templateUrl: "./lobby-layout.component.html",
    styleUrls: ["./lobby-layout.component.scss"],
})
export class LobbyLayoutComponent implements OnInit {
    public rooms: Room[];
    public idOfCurrentRoom: string;

    constructor() {}

    get currentRoom(): Room {
        return this.rooms.find(room => room.id === this.idOfCurrentRoom);
    }

    ngOnInit(): void {
        this.rooms = gameRooms;
        this.idOfCurrentRoom = this.rooms[0].id;
    }

    selectRoom(roomId: string): void {
        this.idOfCurrentRoom = roomId;
    }
}
