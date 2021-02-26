import { Routes } from "@angular/router";
import { LobbyComponent } from "../lobby/lobby.component";
import { GameChordsComponent } from "../rooms/game-chords/game-chords.component";
import { GameNotesComponent } from "../rooms/game-notes/game-notes.component";
import { GameScalesComponent } from "../rooms/game-scales/game-scales.component";
import { ReleaseHistoryComponent } from "../rooms/release-history/release-history.component";

export const ROUTES: Routes = [
    { path: "lobby", component: LobbyComponent },
    { path: "game-notes", component: GameNotesComponent },
    { path: "game-chords", component: GameChordsComponent },
    { path: "game-scales", component: GameScalesComponent },
    { path: "release-history", component: ReleaseHistoryComponent },
    { path: "**", component: LobbyComponent },
];
