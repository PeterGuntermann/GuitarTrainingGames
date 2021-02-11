import { Component, OnInit } from "@angular/core";

interface Room {
    name: string;
    icon: string;
    description: string;
}

@Component({
    selector: "app-layout",
    templateUrl: "./lobby-layout.component.html",
    styleUrls: ["./lobby-layout.component.scss"],
})
export class LobbyLayoutComponent implements OnInit {
    public rooms: Room[];
    public nameOfCurrentRoom: string;

    constructor() {}

    get currentRoom(): Room {
        return this.rooms.find(room => room.name === this.nameOfCurrentRoom);
    }

    ngOnInit(): void {
        this.rooms = [];
        this.rooms.push({
            name: "Game: Find Notes",
            icon: "music_note",
            description: "Find the displayed note on a specific string.",
        });
        this.rooms.push({
            name: "Game: Play Chord",
            icon: "piano",
            description: "Play the displayed chord in any form.",
        });
        this.rooms.push({
            name: "Game: Play mode scale",
            icon: "stairs",
            description: "Play the scale that belongs to the displayed mode.",
        });
        this.nameOfCurrentRoom = this.rooms[0].name;
    }

    selectRoom(roomName: string): void {
        this.nameOfCurrentRoom = roomName;
    }
}
