import { Injectable } from "@angular/core";
import { GAME_ROOMS } from "@constants/game-rooms";
import { Room } from "@models/room.interface";

@Injectable({
    providedIn: "root",
})
export class RoomSelectorService {
    private _selectedRoom: Room;

    constructor() {
        this._selectedRoom = GAME_ROOMS[0];
    }

    selectRoom(roomId: string): void {
        const findResult = GAME_ROOMS.find(room => room.id === roomId);

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
