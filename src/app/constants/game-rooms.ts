import { Room } from "@models/room.interface";

export const GAME_NOTE_ROULETTE_ROOM: Room = {
    id: "game-note-roulette",
    title: "Note Roulette",
    subtitle: "Find the displayed notes.",
    icon: "music_note",
    description: "Find the displayed note on a specific string.",
} as const;

export const GAME_CHORD_POKER_ROOM: Room = {
    id: "game-chord-poker",
    title: "Chord Poker",
    subtitle: "Play randomly displayed chords.",
    icon: "piano",
    description: "Play the displayed chord in any form.",
} as const;

export const GAME_SCALE_MACHINE_ROOM: Room = {
    id: "game-scale-machine",
    title: "Scale Machine",
    subtitle: "Up and down.",
    icon: "stairs",
    description: "Play the scale that belongs to the displayed mode.",
} as const;

export const GAME_ROOMS: Room[] = [
    GAME_NOTE_ROULETTE_ROOM,
    GAME_CHORD_POKER_ROOM,
    GAME_SCALE_MACHINE_ROOM,
];
