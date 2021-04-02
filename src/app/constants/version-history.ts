import { VersionInfo } from "@models/version-info.interface";

export const VERSION_HISTORY: VersionInfo[] = [
    {
        versionNumber: "v1.1",
        features: [
            "Visual upgrades in lobby",
            "Give those games some names: Note Roulette, Chord Poker and Scale Machine",
            "Circle of fifths visualization for Note Roulette",
        ],
    },
    {
        versionNumber: "v1.0",
        features: [
            "Three simple games based on random generators: Notes, Chords, Scales",
            "Lobby with quick navigation",
            "Side menu with navigation",
            "Material Design",
            "Feedback form",
        ],
    },
];
