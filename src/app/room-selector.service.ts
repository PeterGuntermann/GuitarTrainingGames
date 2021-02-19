import { Injectable } from "@angular/core";
import { GameRooms } from "./constants/game-rooms";
import { Room } from "./models/room.interface";

@Injectable({
    providedIn: "root",
})
export class RoomSelectorService {
    private _selectedRoom: Room;

    constructor() {
        this._selectedRoom = GameRooms[0];
    }

    selectRoom(roomId: string): void {
        const findResult = GameRooms.find(room => room.id === roomId);

        if (findResult === undefined) {
            console.warn(`Room with id "${roomId}" does not exist.`);
            return;
        }

        this._selectedRoom = findResult;
    }

    get selectedRoom(): Room {
        return this._selectedRoom;
    }
}
