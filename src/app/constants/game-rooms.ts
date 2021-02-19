import { Room } from "../models/room.interface";

export const GAME_NOTES_ROOM: Room = {
    id: "game-notes",
    title: "Notes",
    subtitle: "Find the displayed notes.",
    icon: "music_note",
    description: "Find the displayed note on a specific string.",
} as const;

export const GAME_CHORDS_ROOM: Room = {
    id: "game-chords",
    title: "Chords",
    subtitle: "Play randomly displayed chords.",
    icon: "piano",
    description: "Play the displayed chord in any form.",
} as const;

export const GAME_SCALES_ROOM: Room = {
    id: "game-scales",
    title: "Scales",
    subtitle: "Up and down.",
    icon: "stairs",
    description: "Play the scale that belongs to the displayed mode.",
} as const;

export const GAME_ROOMS: Room[] = [
    GAME_NOTES_ROOM,
    GAME_CHORDS_ROOM,
    GAME_SCALES_ROOM,
];
