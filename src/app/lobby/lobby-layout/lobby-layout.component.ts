import { Component, OnInit } from "@angular/core";

interface Room {
    id: string;
    title: string;
    subtitle: string;
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
    public idOfCurrentRoom: string;

    constructor() {}

    get currentRoom(): Room {
        return this.rooms.find(room => room.id === this.idOfCurrentRoom);
    }

    ngOnInit(): void {
        this.rooms = [];
        this.rooms.push({
            id: "game-notes",
            title: "Notes",
            subtitle: "Find the displayed notes.",
            icon: "music_note",
            description: "Find the displayed note on a specific string.",
        });
        this.rooms.push({
            id: "game-chords",
            title: "Chords",
            subtitle: "Play randomly displayed chords.",
            icon: "piano",
            description: "Play the displayed chord in any form.",
        });
        this.rooms.push({
            id: "game-scales",
            title: "Scales",
            subtitle: "Up and down.",
            icon: "stairs",
            description: "Play the scale that belongs to the displayed mode.",
        });
        this.idOfCurrentRoom = this.rooms[0].id;
    }

    selectRoom(roomId: string): void {
        this.idOfCurrentRoom = roomId;
    }
}
