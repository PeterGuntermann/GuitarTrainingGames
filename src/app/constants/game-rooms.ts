import { Room } from "../models/room.interface";

export const gameNotesRoom: Room = {
    id: "game-notes",
    title: "Notes",
    subtitle: "Find the displayed notes.",
    icon: "music_note",
    description: "Find the displayed note on a specific string.",
} as const;

export const gameChordsRoom: Room = {
    id: "game-chords",
    title: "Chords",
    subtitle: "Play randomly displayed chords.",
    icon: "piano",
    description: "Play the displayed chord in any form.",
} as const;

export const gameScalesRoom: Room = {
    id: "game-scales",
    title: "Scales",
    subtitle: "Up and down.",
    icon: "stairs",
    description: "Play the scale that belongs to the displayed mode.",
} as const;

export const gameRooms: Room[] = [
    gameNotesRoom,
    gameChordsRoom,
    gameScalesRoom,
];
