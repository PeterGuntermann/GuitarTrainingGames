import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { GameChordsComponent } from "./game-chords/game-chords.component";
import { GameNotesComponent } from "./game-notes/game-notes.component";
import { GameScalesComponent } from "./game-scales/game-scales.component";
import { LobbyLayoutComponent } from "./lobby/lobby-layout/lobby-layout.component";
import { LobbyModule } from "./lobby/lobby.module";
import { RoomLayoutComponent } from "./room/room-layout/room-layout.component";
import { RoomModule } from "./room/room.module";

const routes: Routes = [
    { path: "lobby", component: LobbyLayoutComponent },
    { path: "room", component: RoomLayoutComponent },
    { path: "game-notes", component: GameNotesComponent },
    { path: "game-chords", component: GameChordsComponent },
    { path: "game-scales", component: GameScalesComponent },
    { path: "**", component: LobbyLayoutComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        GameNotesComponent,
        GameChordsComponent,
        GameScalesComponent,
    ],
    imports: [
        BrowserModule,
        LobbyModule,
        RoomModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        MatButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
