import { Routes } from "@angular/router";
import { LobbyComponent } from "../lobby/lobby.component";
import { PlaygroundComponent } from "../playground/playground.component";
import { AboutTheAppComponent } from "../rooms/about-the-app/about-the-app.component";
import { FeedbackComponent } from "../rooms/feedback/feedback.component";
import { GameChordPokerComponent } from "../rooms/game-chord-poker/game-chord-poker.component";
import { GameNoteRouletteComponent } from "../rooms/game-note-roulette/game-note-roulette.component";
import { GameScaleMachineComponent } from "../rooms/game-scale-machine/game-scale-machine.component";
import { ReleaseHistoryComponent } from "../rooms/release-history/release-history.component";
import { SettingsComponent } from "../rooms/settings/settings.component";

export const ROUTES: Routes = [
    { path: "", component: LobbyComponent },
    { path: "lobby", component: LobbyComponent },
    { path: "game-note-roulette", component: GameNoteRouletteComponent },
    { path: "game-chord-poker", component: GameChordPokerComponent },
    { path: "game-scale-machine", component: GameScaleMachineComponent },
    { path: "release-history", component: ReleaseHistoryComponent },
    { path: "about-the-app", component: AboutTheAppComponent },
    { path: "settings", component: SettingsComponent },
    { path: "feedback", component: FeedbackComponent },
    { path: "playground", component: PlaygroundComponent },
    { path: "**", redirectTo: "" },
];
